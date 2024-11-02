export async function submitForm<T>(
    data: T,
    endpoint: string,
    headers?: Record<string, string> 
  ) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers, 
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(`Failed to submit the form: ${errorResponse.message || 'Unknown error'}`);
    }
    return response.json();
  }
  