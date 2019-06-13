export const USER_TOKEN = "USER_TOKEN";

/**
 * Save user token
 * @param {string} token
 */
export function saveUserToken(token) {
  localStorage.setItem(USER_TOKEN, token);
}

/**
 * Remove user token
 */
export function removeUserToken() {
  localStorage.removeItem(USER_TOKEN);
}

/**
 * Get user token
 * @return {string}
 */
export function getUserToken() {
  return localStorage.getItem(USER_TOKEN) || null;
}
