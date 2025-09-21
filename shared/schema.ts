import { z } from "zod";

export const conversationMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

export const chatMessageSchema = z.object({
  message: z.string().min(1).max(1000),
  petType: z.string().min(1).max(50).optional(),
  petName: z.string().min(1).max(50).optional(),
  conversationHistory: z.array(conversationMessageSchema).optional(),
});

export const emailSubscriptionSchema = z.object({
  email: z.string().email(),
  source: z.string().optional(),
});

export const feedbackSchema = z.object({
  messageId: z.string(),
  rating: z.enum(["positive", "negative"]),
  petType: z.string().optional(),
});

export type ConversationMessage = z.infer<typeof conversationMessageSchema>;
export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type EmailSubscription = z.infer<typeof emailSubscriptionSchema>;
export type Feedback = z.infer<typeof feedbackSchema>;

export interface ChatResponse {
  response: string;
  messageId: string;
}
