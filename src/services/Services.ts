export const fetchStates = async () => {
    try {
      const response = await fetch('/config/state.json'); 
      const data = await response.json();
        return data;

    } catch (error) {
      console.error("Error loading states:", error);
    }
  };