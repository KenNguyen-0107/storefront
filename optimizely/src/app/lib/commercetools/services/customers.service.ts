import {
  apiRoot,
  defaultLocale,
} from "@/app/lib/commercetools/provider/rest-client";
import type {
  Customer,
  CustomerSignInResult,
  CustomerPagedQueryResponse,
  MyCustomerUpdateAction,
} from "@commercetools/platform-sdk";
import type { CommerceToolsClient } from "@/app/lib/commercetools/types/client.types";
import {
  APIError,
  ErrorCode,
  createError,
} from "@/app/lib/commercetools/utils/error.utils";
import type { ICustomerService } from "@/app/lib/commercetools/interfaces/customer-service.interface";
import type {
  CustomerRegistrationRequest,
  CustomerSignInRequest,
  CustomerUpdateRequest,
  ChangePasswordRequest,
  ResetPasswordRequest,
  PasswordResetTokenRequest,
  VerifyEmailRequest,
  EmailVerificationTokenRequest,
  CustomerQueryOptions,
} from "@/app/lib/commercetools/models/customer.model";

export class CustomerService implements ICustomerService {
  private client: CommerceToolsClient;

  constructor(client?: CommerceToolsClient) {
    this.client = client || apiRoot;
  }

  /**
   * Get current customer profile using /me endpoint (for authenticated users with tokens)
   * @returns Customer profile
   */
  async getProfile(): Promise<Customer> {
    try {
      const response = await this.client.me().get().execute();
      return response.body;
    } catch (error) {
      console.error("Error fetching customer profile:", error);
      throw error;
    }
  }

  async updateProfile(actions: MyCustomerUpdateAction[]): Promise<Customer> {
    try {
      const response = await this.client
        .me()
        .post({
          body: {
            version: 1,
            actions,
          },
        })
        .execute();
      return response.body;
    } catch (error) {
      console.error("Error updating customer profile:", error);
      throw error;
    }
  }

  async signUp(
    request: CustomerRegistrationRequest,
  ): Promise<CustomerSignInResult> {
    if (!request.email) {
      throw new APIError("Email is required", ErrorCode.MISSING_REQUIRED_FIELD);
    }

    if (!request.password) {
      throw new APIError(
        "Password is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .post({
          body: {
            email: request.email,
            password: request.password,
            firstName: request.firstName,
            lastName: request.lastName,
            middleName: request.middleName,
            title: request.title,
            dateOfBirth: request.dateOfBirth,
            companyName: request.companyName,
            vatId: request.vatId,
            addresses: request.addresses,
            defaultShippingAddress: request.defaultShippingAddress,
            defaultBillingAddress: request.defaultBillingAddress,
            shippingAddresses: request.shippingAddresses,
            billingAddresses: request.billingAddresses,
            isEmailVerified: request.isEmailVerified,
            customerGroup: request.customerGroup,
            locale: request.locale || defaultLocale,
            salutation: request.salutation,
            key: request.key,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error creating customer:", error);

      if (error instanceof Error && error.message.includes("DuplicateField")) {
        throw new APIError(
          "An account with this email already exists",
          ErrorCode.INVALID_INPUT,
        );
      }

      throw createError(error);
    }
  }

  async signIn(request: CustomerSignInRequest): Promise<CustomerSignInResult> {
    if (!request.email) {
      throw new APIError("Email is required", ErrorCode.MISSING_REQUIRED_FIELD);
    }

    if (!request.password) {
      throw new APIError(
        "Password is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .login()
        .post({
          body: {
            email: request.email,
            password: request.password,
            anonymousCart: {
              typeId: "cart",
              id: request.anonymousCartId,
            },
            anonymousCartId: request.anonymousCartId,
            anonymousCartSignInMode: request.anonymousCartSignInMode,
            anonymousId: request.anonymousId,
            updateProductData: request.updateProductData,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error signing in customer:", error);

      if (
        error instanceof Error &&
        error.message.includes("InvalidCredentials")
      ) {
        throw new APIError(
          "Invalid email or password",
          ErrorCode.INVALID_CREDENTIALS,
        );
      }

      throw createError(error);
    }
  }

  async getCustomerById(customerId: string): Promise<Customer | null> {
    if (!customerId) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .withId({ ID: customerId })
        .get()
        .execute();

      return response.body;
    } catch (error) {
      console.error(`Error fetching customer ${customerId}:`, error);

      if (error instanceof Error && error.message.includes("not found")) {
        return null;
      }

      throw createError(error);
    }
  }

  async getCustomerByKey(customerKey: string): Promise<Customer | null> {
    if (!customerKey) {
      throw new APIError(
        "Customer key is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .withKey({ key: customerKey })
        .get()
        .execute();

      return response.body;
    } catch (error) {
      console.error(`Error fetching customer with key ${customerKey}:`, error);

      if (error instanceof Error && error.message.includes("not found")) {
        return null;
      }

      throw createError(error);
    }
  }

  async getCustomerByEmail(email: string): Promise<Customer | null> {
    if (!email) {
      throw new APIError("Email is required", ErrorCode.MISSING_REQUIRED_FIELD);
    }

    try {
      const response = await this.client
        .customers()
        .get({
          queryArgs: {
            where: `email="${email}"`,
            limit: 1,
          },
        })
        .execute();

      return response.body.results[0] || null;
    } catch (error) {
      console.error(`Error fetching customer with email ${email}:`, error);
      throw createError(error);
    }
  }

  async updateCustomer(
    customerId: string,
    request: CustomerUpdateRequest,
  ): Promise<Customer> {
    if (!customerId) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    if (!request.actions || request.actions.length === 0) {
      throw new APIError(
        "At least one update action is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .withId({ ID: customerId })
        .post({
          body: {
            version: request.version,
            actions: request.actions,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error updating customer:", error);

      if (
        error instanceof Error &&
        error.message.includes("ConcurrentModification")
      ) {
        throw new APIError(
          "Customer was modified by another request. Please refresh and try again.",
          ErrorCode.API_REQUEST_FAILED,
        );
      }

      throw createError(error);
    }
  }

  async changePassword(request: ChangePasswordRequest): Promise<Customer> {
    if (!request.id) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    if (!request.currentPassword) {
      throw new APIError(
        "Current password is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    if (!request.newPassword) {
      throw new APIError(
        "New password is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .password()
        .post({
          body: {
            id: request.id,
            version: request.version,
            currentPassword: request.currentPassword,
            newPassword: request.newPassword,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error changing password:", error);

      if (
        error instanceof Error &&
        error.message.includes("InvalidCurrentPassword")
      ) {
        throw new APIError(
          "Current password is incorrect",
          ErrorCode.INVALID_CREDENTIALS,
        );
      }

      throw createError(error);
    }
  }

  async requestPasswordReset(
    request: PasswordResetTokenRequest,
  ): Promise<void> {
    if (!request.email) {
      throw new APIError("Email is required", ErrorCode.MISSING_REQUIRED_FIELD);
    }

    try {
      await this.client
        .customers()
        .passwordToken()
        .post({
          body: {
            email: request.email,
            ttlMinutes: request.ttlMinutes,
          },
        })
        .execute();
    } catch (error) {
      console.error("Error requesting password reset:", error);
      throw createError(error);
    }
  }

  async resetPassword(request: ResetPasswordRequest): Promise<Customer> {
    if (!request.tokenValue) {
      throw new APIError(
        "Reset token is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    if (!request.newPassword) {
      throw new APIError(
        "New password is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .passwordReset()
        .post({
          body: {
            tokenValue: request.tokenValue,
            newPassword: request.newPassword,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error resetting password:", error);

      if (error instanceof Error && error.message.includes("InvalidToken")) {
        throw new APIError(
          "Invalid or expired reset token",
          ErrorCode.AUTH_FAILED,
        );
      }

      throw createError(error);
    }
  }

  async requestEmailVerification(
    request: EmailVerificationTokenRequest,
  ): Promise<void> {
    if (!request.id) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      await this.client
        .customers()
        .emailToken()
        .post({
          body: {
            id: request.id,
            version: request.version,
            ttlMinutes: request.ttlMinutes || 10,
          },
        })
        .execute();
    } catch (error) {
      console.error("Error requesting email verification:", error);
      throw createError(error);
    }
  }

  async verifyEmail(request: VerifyEmailRequest): Promise<Customer> {
    if (!request.tokenValue) {
      throw new APIError(
        "Verification token is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      const response = await this.client
        .customers()
        .emailConfirm()
        .post({
          body: {
            tokenValue: request.tokenValue,
          },
        })
        .execute();

      return response.body;
    } catch (error) {
      console.error("Error verifying email:", error);

      if (error instanceof Error && error.message.includes("InvalidToken")) {
        throw new APIError(
          "Invalid or expired verification token",
          ErrorCode.AUTH_FAILED,
        );
      }

      throw createError(error);
    }
  }

  async getCustomers(
    options: CustomerQueryOptions = {},
  ): Promise<CustomerPagedQueryResponse> {
    const {
      limit = 20,
      offset = 0,
      sort = ["createdAt desc"],
      filters = {},
    } = options;

    const queryArgs: any = {
      limit,
      offset,
      sort,
    };

    // Apply filters
    const whereQueries: string[] = [];

    if (filters.email) {
      whereQueries.push(`email="${filters.email}"`);
    }

    if (filters.firstName) {
      whereQueries.push(`firstName="${filters.firstName}"`);
    }

    if (filters.lastName) {
      whereQueries.push(`lastName="${filters.lastName}"`);
    }

    if (filters.customerGroup) {
      whereQueries.push(`customerGroup(id="${filters.customerGroup}")`);
    }

    if (filters.companyName) {
      whereQueries.push(`companyName="${filters.companyName}"`);
    }

    if (filters.isEmailVerified !== undefined) {
      whereQueries.push(`isEmailVerified=${filters.isEmailVerified}`);
    }

    if (filters.createdAt) {
      if (filters.createdAt.from) {
        whereQueries.push(`createdAt >= "${filters.createdAt.from}"`);
      }
      if (filters.createdAt.to) {
        whereQueries.push(`createdAt <= "${filters.createdAt.to}"`);
      }
    }

    if (whereQueries.length > 0) {
      queryArgs.where = whereQueries.join(" AND ");
    }

    try {
      const response = await this.client
        .customers()
        .get({ queryArgs })
        .execute();
      return response.body;
    } catch (error) {
      console.error("Error fetching customers:", error);
      throw createError(error);
    }
  }

  async deleteCustomer(customerId: string, version: number): Promise<void> {
    if (!customerId) {
      throw new APIError(
        "Customer ID is required",
        ErrorCode.MISSING_REQUIRED_FIELD,
      );
    }

    try {
      await this.client
        .customers()
        .withId({ ID: customerId })
        .delete({
          queryArgs: {
            version,
          },
        })
        .execute();
    } catch (error) {
      console.error("Error deleting customer:", error);
      throw createError(error);
    }
  }
}
