export interface PasteResponse {
  value: string;
}

export interface PasteRequest extends PasteResponse {
  ex: number;
}

export interface TokenResponse {
  token: string;
}
