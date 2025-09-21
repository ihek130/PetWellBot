// Storage interface for future use if authentication is needed
// Currently not used by the pet symptom checker

export interface IStorage {
  // Future methods can be added here when needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Future storage implementation
  }
}

export const storage = new MemStorage();