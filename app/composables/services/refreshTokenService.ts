export const refreshToken = async (refreshToken: string): Promise<string> => {
  const config = useRuntimeConfig();
  const API_URL = config.public.apiBase || "";
  const response = await fetch(`${API_URL}/api/token/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!response.ok) {
    throw new Error("Impossible de rafraîchir le token");
  }

  const data = await response.json();

  if (!data.token) {
    throw new Error("Token manquant dans la réponse");
  }

  return data.token;
};
