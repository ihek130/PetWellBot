import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage, ChatResponse } from "@shared/schema";

export async function sendChatMessage(chatData: ChatMessage): Promise<ChatResponse> {
  try {
    const response = await apiRequest("POST", "/api/chat", chatData);
    const result = await response.json();
    
    if (result.error) {
      throw new Error(result.error);
    }
    
    return result;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to send message');
  }
}

export async function submitFeedback(messageId: string, rating: "positive" | "negative", petType?: string) {
  await apiRequest("POST", "/api/feedback", { messageId, rating, petType });
}

export async function subscribeEmail(email: string, source?: string) {
  const response = await apiRequest("POST", "/api/subscribe", { email, source });
  return response.json();
}
