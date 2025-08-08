export interface TokenRequest {
  email?: string;
  password?: string;
  anonymousId?: string;
  refreshToken?: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  refresh_token?: string;
}

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

export interface ITokenService {
  /**
   * Get anonymous token for guest users
   * @param anonymousId - Optional anonymous ID for cart continuity
   * @returns Promise<ServiceResponse<TokenResponse>>
   */
  getAnonymousToken(
    anonymousId?: string,
  ): Promise<ServiceResponse<TokenResponse>>;

  /**
   * Get customer token using email/password authentication
   * @param email - Customer email
   * @param password - Customer password
   * @returns Promise<ServiceResponse<TokenResponse>>
   */
  getPasswordToken(
    email: string,
    password: string,
  ): Promise<ServiceResponse<TokenResponse>>;

  /**
   * Refresh an existing token
   * @param refreshToken - The refresh token to use
   * @returns Promise<ServiceResponse<TokenResponse>>
   */
  refreshToken(refreshToken: string): Promise<ServiceResponse<TokenResponse>>;
}
