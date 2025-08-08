import type {
  Customer,
  CustomerSignInResult,
  CustomerPagedQueryResponse,
  MyCustomerUpdateAction,
} from "@commercetools/platform-sdk";
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

export interface ICustomerService {
  /**
   * Registers a new customer account
   * @param request - Customer registration details
   * @returns Promise resolving to customer sign-in result
   * @throws CommerceError if email already exists or validation fails
   */
  signUp(request: CustomerRegistrationRequest): Promise<CustomerSignInResult>;

  /**
   * Signs in an existing customer
   * @param request - Customer sign-in credentials
   * @returns Promise resolving to customer sign-in result
   * @throws CommerceError if credentials are invalid
   */
  signIn(request: CustomerSignInRequest): Promise<CustomerSignInResult>;

  /**
   * Retrieves a customer by ID
   * @param customerId - The customer identifier
   * @returns Promise resolving to customer or null if not found
   * @throws CommerceError if customerId is invalid
   */
  getCustomerById(customerId: string): Promise<Customer | null>;

  /**
   * Retrieves a customer by key
   * @param customerKey - The customer key
   * @returns Promise resolving to customer or null if not found
   * @throws CommerceError if customerKey is invalid
   */
  getCustomerByKey(customerKey: string): Promise<Customer | null>;

  /**
   * Retrieves a customer by email address
   * @param email - The customer email
   * @returns Promise resolving to customer or null if not found
   * @throws CommerceError if email is invalid
   */
  getCustomerByEmail(email: string): Promise<Customer | null>;

  /**
   * Updates customer information
   * @param customerId - The customer identifier
   * @param request - Customer update details
   * @returns Promise resolving to updated customer
   * @throws CommerceError if update fails or customer is modified concurrently
   */
  updateCustomer(
    customerId: string,
    request: CustomerUpdateRequest,
  ): Promise<Customer>;

  /**
   * Changes customer password
   * @param request - Password change details
   * @returns Promise resolving to updated customer
   * @throws CommerceError if current password is incorrect
   */
  changePassword(request: ChangePasswordRequest): Promise<Customer>;

  /**
   * Requests a password reset token
   * @param request - Password reset request details
   * @returns Promise resolving when reset email is sent
   * @throws CommerceError if email is invalid
   */
  requestPasswordReset(request: PasswordResetTokenRequest): Promise<void>;

  /**
   * Resets customer password using token
   * @param request - Password reset details with token
   * @returns Promise resolving to updated customer
   * @throws CommerceError if token is invalid or expired
   */
  resetPassword(request: ResetPasswordRequest): Promise<Customer>;

  /**
   * Requests an email verification token
   * @param request - Email verification request details
   * @returns Promise resolving when verification email is sent
   * @throws CommerceError if customer ID is invalid
   */
  requestEmailVerification(
    request: EmailVerificationTokenRequest,
  ): Promise<void>;

  /**
   * Verifies customer email using token
   * @param request - Email verification details with token
   * @returns Promise resolving to updated customer
   * @throws CommerceError if token is invalid or expired
   */
  verifyEmail(request: VerifyEmailRequest): Promise<Customer>;

  /**
   * Retrieves customers with filtering and pagination
   * @param options - Query options including filters, sorting, and pagination
   * @returns Promise resolving to paginated customer results
   * @throws CommerceError if query fails
   */
  getCustomers(
    options?: CustomerQueryOptions,
  ): Promise<CustomerPagedQueryResponse>;

  /**
   * Deletes a customer account
   * @param customerId - The customer identifier
   * @param version - Current customer version for optimistic locking
   * @returns Promise resolving when customer is deleted
   * @throws CommerceError if operation fails
   */
  deleteCustomer(customerId: string, version: number): Promise<void>;

  /**
   * Retrieves the customer profile
   * @returns Promise resolving to customer profile
   * @throws CommerceError if operation fails
   */
  getProfile(): Promise<Customer>;

  updateProfile(actions: MyCustomerUpdateAction[]): Promise<Customer>;
}
