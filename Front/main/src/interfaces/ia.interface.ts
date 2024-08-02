// export interface ChatStreamResponse {
//     eventType: string;
//     text: string;
//   }
  
//   export interface CohereChatRequest {
//     model: string;
//     message: string;
//     temperature: number;
//     chatHistory: any[];
//     promptTruncation: string;
//     connectors: Array<{ id: string }>;
//   }
  
export interface ChatStreamResponse {
    responseId: string; // ID de la respuesta
    text: string; // Mensaje del chatbot
    generationId: string; // ID de generación
    chatHistory: Array<{
        role: string; // Rol del hablante (USER o CHATBOT)
        message: string; // Mensaje del usuario o del chatbot
    }>; // Historial de chat
    finishReason: string; // Razón por la que se completó
    meta: {
        apiVersion: {
            version: string; // Versión de la API
        };
        billedUnits: {
            inputTokens: number; // Tokens de entrada facturados
            outputTokens: number; // Tokens de salida facturados
        };
        tokens: {
            inputTokens: number; // Total de tokens de entrada
            outputTokens: number; // Total de tokens de salida
        };
    };
}


export interface CohereChatRequest {
    model: string;
    message: string;
    preamble: string;
    temperature: number;
    chatHistory?: Array<{ role: string; message: string }>;
    promptTruncation: string;
    connectors?: Array<{ id: string }>;
}



// RESPUESTAS DE LA IA DE CLASIFICACION 



export interface ApiRequestExample {
    model: string;
    inputs: string[];
    examples: Array<{
      text: string;
      label: string;
    }>;
  }
  

export interface Classification {
    classification_type: string;
    confidence: number;
    confidences: Array<{
      option: string;
      confidence: number;
    }>;
    id: string;
    input: string;
    labels: { [key: string]: { confidence: number } };
    prediction: string;
    predictions: string[];
  }
  
  export interface ApiResponse {
    id: string;
    classifications: Classification[];
    meta: {
      api_version: {
        version: string;
        is_deprecated: boolean;
      };
      warnings: string[];
      billed_units: {
        classifications: number;
      };
    };
  }
  
