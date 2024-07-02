export const addReport = async (type: 'user' | 'post', referenceId: string, reason: string, reportedBy: string): Promise<any> => {
    const newReport = {};
    return newReport;
  };
  
  export const updateReport = async (id: string, reason: string): Promise<any | null> => {
    return {};
  };
  
  export const getReports = async (type?: 'user' | 'post'): Promise<any[]> => {
    const query = type ? { type } : {};
    return [];
  };
  
  export const getReportById = async (id: string): Promise<any | null> => {
    return [];
  };