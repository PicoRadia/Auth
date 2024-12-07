export type ProcessMetric = {
  date: string;
  avgDuration: number;
  period: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly';
  type: string;
};

export const processMetricsData: ProcessMetric[] = [
  // Sale -> Site Survey
  { date: '2024-01-01', avgDuration: 3.5, period: 'Monthly', type: 'Sale -> Site Survey' },
  { date: '2024-02-01', avgDuration: 4.2, period: 'Monthly', type: 'Sale -> Site Survey' },
  { date: '2024-03-01', avgDuration: 3.8, period: 'Monthly', type: 'Sale -> Site Survey' },
  
  // Site Survey -> Design Complete
  { date: '2024-01-01', avgDuration: 7.2, period: 'Monthly', type: 'Site Survey -> Design Complete' },
  { date: '2024-02-01', avgDuration: 6.8, period: 'Monthly', type: 'Site Survey -> Design Complete' },
  { date: '2024-03-01', avgDuration: 7.5, period: 'Monthly', type: 'Site Survey -> Design Complete' },
  
  // Design Complete -> SOW Sent
  { date: '2024-01-01', avgDuration: 2.1, period: 'Monthly', type: 'Design Complete -> SOW Sent' },
  { date: '2024-02-01', avgDuration: 2.4, period: 'Monthly', type: 'Design Complete -> SOW Sent' },
  { date: '2024-03-01', avgDuration: 2.0, period: 'Monthly', type: 'Design Complete -> SOW Sent' },
  
  // SOW Approved -> Engineering Complete
  { date: '2024-01-01', avgDuration: 14.3, period: 'Monthly', type: 'SOW Approved -> Engineering Complete' },
  { date: '2024-02-01', avgDuration: 13.8, period: 'Monthly', type: 'SOW Approved -> Engineering Complete' },
  { date: '2024-03-01', avgDuration: 15.2, period: 'Monthly', type: 'SOW Approved -> Engineering Complete' },
  
  // Engineering Complete -> Permit Submission
  { date: '2024-01-01', avgDuration: 5.6, period: 'Monthly', type: 'Engineering Complete -> Permit Submission' },
  { date: '2024-02-01', avgDuration: 4.9, period: 'Monthly', type: 'Engineering Complete -> Permit Submission' },
  { date: '2024-03-01', avgDuration: 5.2, period: 'Monthly', type: 'Engineering Complete -> Permit Submission' },
  
  // Permit Submission -> Permit Approved
  { date: '2024-01-01', avgDuration: 21.4, period: 'Monthly', type: 'Permit Submission -> Permit Approved' },
  { date: '2024-02-01', avgDuration: 23.6, period: 'Monthly', type: 'Permit Submission -> Permit Approved' },
  { date: '2024-03-01', avgDuration: 22.8, period: 'Monthly', type: 'Permit Submission -> Permit Approved' },
  
  // Permit Approved -> Install Scheduled
  { date: '2024-01-01', avgDuration: 8.7, period: 'Monthly', type: 'Permit Approved -> Install Scheduled' },
  { date: '2024-02-01', avgDuration: 7.9, period: 'Monthly', type: 'Permit Approved -> Install Scheduled' },
  { date: '2024-03-01', avgDuration: 8.3, period: 'Monthly', type: 'Permit Approved -> Install Scheduled' },
  
  // Install Scheduled -> Install Complete
  { date: '2024-01-01', avgDuration: 1.2, period: 'Monthly', type: 'Install Scheduled -> Install Complete' },
  { date: '2024-02-01', avgDuration: 1.4, period: 'Monthly', type: 'Install Scheduled -> Install Complete' },
  { date: '2024-03-01', avgDuration: 1.3, period: 'Monthly', type: 'Install Scheduled -> Install Complete' },
  
  // Install Complete -> Inspection Scheduled
  { date: '2024-01-01', avgDuration: 4.8, period: 'Monthly', type: 'Install Complete -> Inspection Scheduled' },
  { date: '2024-02-01', avgDuration: 5.2, period: 'Monthly', type: 'Install Complete -> Inspection Scheduled' },
  { date: '2024-03-01', avgDuration: 4.6, period: 'Monthly', type: 'Install Complete -> Inspection Scheduled' },
  
  // Inspection Scheduled -> Inspection Approved
  { date: '2024-01-01', avgDuration: 1.8, period: 'Monthly', type: 'Inspection Scheduled -> Inspection Approved' },
  { date: '2024-02-01', avgDuration: 2.1, period: 'Monthly', type: 'Inspection Scheduled -> Inspection Approved' },
  { date: '2024-03-01', avgDuration: 1.9, period: 'Monthly', type: 'Inspection Scheduled -> Inspection Approved' },
  
  // PTO Related Steps
  { date: '2024-01-01', avgDuration: 12.4, period: 'Monthly', type: 'PTO Submitted -> PTO Received' },
  { date: '2024-02-01', avgDuration: 13.8, period: 'Monthly', type: 'PTO Submitted -> PTO Received' },
  { date: '2024-03-01', avgDuration: 11.9, period: 'Monthly', type: 'PTO Submitted -> PTO Received' },
  
  // System Activation
  { date: '2024-01-01', avgDuration: 1.5, period: 'Monthly', type: 'PTO Received -> System Activated' },
  { date: '2024-02-01', avgDuration: 1.3, period: 'Monthly', type: 'PTO Received -> System Activated' },
  { date: '2024-03-01', avgDuration: 1.4, period: 'Monthly', type: 'PTO Received -> System Activated' },
]; 