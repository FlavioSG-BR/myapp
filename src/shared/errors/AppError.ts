class AppError extends Error {
    public status: number;
  
    constructor(message: string) {
      super(message);
      this.name = 'AppError';
      this.status = 500;
    }
  }
  
  export default AppError;
  