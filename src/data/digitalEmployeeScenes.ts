export interface IndustrySceneCopy {
  system: string
  queue: { id: string; task: string }[]
}

export const industrySceneCopy: Record<string, IndustrySceneCopy> = {
  healthcare: {
    system: 'EHR · Payer portal',
    queue: [
      { id: 'ELG-2041', task: 'Verify eligibility for MRN-88412' },
      { id: 'AUTH-773', task: 'Submit prior authorization' },
      { id: 'CLM-5519', task: 'Post 837P claim batch' },
    ],
  },
  'banking-financial-services': {
    system: 'Core banking · KYC',
    queue: [
      { id: 'KYC-1182', task: 'Match identity documents' },
      { id: 'AML-440', task: 'Score transaction cluster' },
      { id: 'LON-902', task: 'Assemble loan file' },
    ],
  },
  insurance: {
    system: 'Policy admin · FNOL',
    queue: [
      { id: 'CLM-3301', task: 'Validate first notice of loss' },
      { id: 'POL-218', task: 'Issue renewal packet' },
      { id: 'QTE-77', task: 'Price commercial quote' },
    ],
  },
  'accounting-finance': {
    system: 'ERP · AP/AR',
    queue: [
      { id: 'INV-8840', task: 'Match PO to invoice' },
      { id: 'REC-12', task: 'Reconcile bank feed' },
      { id: 'CLS-09', task: 'Prepare close checklist' },
    ],
  },
  retail: {
    system: 'POS · Inventory',
    queue: [
      { id: 'ORD-6120', task: 'Allocate store inventory' },
      { id: 'PRC-44', task: 'Push markdown prices' },
      { id: 'RTN-901', task: 'Process return to stock' },
    ],
  },
  ecommerce: {
    system: 'OMS · Marketplace',
    queue: [
      { id: 'SO-44112', task: 'Route order to FC' },
      { id: 'LST-88', task: 'Sync marketplace listing' },
      { id: 'SHP-203', task: 'Track last-mile scan' },
    ],
  },
  manufacturing: {
    system: 'MES · ERP',
    queue: [
      { id: 'PO-1902', task: 'Release purchase order' },
      { id: 'QC-55', task: 'Record line inspection' },
      { id: 'WO-318', task: 'Schedule work order' },
    ],
  },
  'logistics-transportation': {
    system: 'TMS · Dispatch',
    queue: [
      { id: 'BK-7701', task: 'Book LTL shipment' },
      { id: 'RTE-14', task: 'Optimize delivery route' },
      { id: 'POD-332', task: 'Capture proof of delivery' },
    ],
  },
  automotive: {
    system: 'DMS · Warranty',
    queue: [
      { id: 'WRN-441', task: 'Adjudicate warranty claim' },
      { id: 'SVC-90', task: 'Schedule service bay' },
      { id: 'PRT-12', task: 'Order replacement parts' },
    ],
  },
  'real-estate': {
    system: 'PMS · Listings',
    queue: [
      { id: 'LST-204', task: 'Publish property listing' },
      { id: 'LSE-81', task: 'Prepare lease packet' },
      { id: 'RNT-19', task: 'Post rent collection' },
    ],
  },
  construction: {
    system: 'PM · Estimating',
    queue: [
      { id: 'BID-67', task: 'Score incoming bid' },
      { id: 'EST-22', task: 'Update takeoff quantities' },
      { id: 'SFT-9', task: 'File safety report' },
    ],
  },
  'human-resources': {
    system: 'ATS · HRIS',
    queue: [
      { id: 'CV-3308', task: 'Screen inbound resume' },
      { id: 'INT-14', task: 'Book interview slots' },
      { id: 'ONB-5', task: 'Start onboarding checklist' },
    ],
  },
  legal: {
    system: 'CLM · Matter',
    queue: [
      { id: 'CTR-902', task: 'Flag clause deviations' },
      { id: 'DD-44', task: 'Classify diligence files' },
      { id: 'MAT-11', task: 'Update matter timeline' },
    ],
  },
  education: {
    system: 'SIS · Admissions',
    queue: [
      { id: 'APP-1180', task: 'Complete application file' },
      { id: 'ENR-62', task: 'Confirm student enrollment' },
      { id: 'FEE-9', task: 'Post tuition payment' },
    ],
  },
  'government-public-sector': {
    system: 'Case · Permits',
    queue: [
      { id: 'APP-4401', task: 'Review citizen application' },
      { id: 'PMT-88', task: 'Issue permit packet' },
      { id: 'BEN-23', task: 'Validate benefits claim' },
    ],
  },
  telecom: {
    system: 'BSS · OSS',
    queue: [
      { id: 'SIM-9021', task: 'Activate service profile' },
      { id: 'BIL-44', task: 'Generate cycle invoice' },
      { id: 'INC-17', task: 'Triage network complaint' },
    ],
  },
  'travel-hospitality': {
    system: 'PMS · GDS',
    queue: [
      { id: 'RSV-4410', task: 'Confirm hotel reservation' },
      { id: 'CXL-22', task: 'Process cancellation' },
      { id: 'GST-8', task: 'Route guest request' },
    ],
  },
  'restaurants-food-services': {
    system: 'POS · Kitchen',
    queue: [
      { id: 'ORD-118', task: 'Send ticket to kitchen' },
      { id: 'INV-9', task: 'Reorder low stock' },
      { id: 'DLV-4', task: 'Dispatch delivery run' },
    ],
  },
  pharmaceutical: {
    system: 'QMS · Safety',
    queue: [
      { id: 'AE-204', task: 'Log adverse event' },
      { id: 'REG-11', task: 'Assemble submission pack' },
      { id: 'BAT-7', task: 'Verify batch release' },
    ],
  },
  'life-sciences': {
    system: 'LIMS · EDC',
    queue: [
      { id: 'SMP-88', task: 'File lab documentation' },
      { id: 'CD-14', task: 'Clean clinical dataset' },
      { id: 'QC-3', task: 'Flag quality deviation' },
    ],
  },
  'energy-utilities': {
    system: 'CIS · OMS',
    queue: [
      { id: 'MTR-9021', task: 'Ingest meter interval' },
      { id: 'OUT-44', task: 'Dispatch outage ticket' },
      { id: 'BIL-12', task: 'Generate usage bill' },
    ],
  },
  'oil-gas': {
    system: 'CMMS · HSE',
    queue: [
      { id: 'WO-441', task: 'Schedule field maintenance' },
      { id: 'SAF-9', task: 'File safety observation' },
      { id: 'PO-22', task: 'Release procurement pack' },
    ],
  },
  agriculture: {
    system: 'Farm ERP · TMS',
    queue: [
      { id: 'FLD-17', task: 'Log field operations' },
      { id: 'INV-5', task: 'Update grain inventory' },
      { id: 'ORD-2', task: 'Confirm buyer order' },
    ],
  },
  'media-entertainment': {
    system: 'MAM · Rights',
    queue: [
      { id: 'AST-330', task: 'Classify incoming asset' },
      { id: 'LIC-14', task: 'Check license window' },
      { id: 'ADS-8', task: 'Traffic ad unit' },
    ],
  },
  'marketing-advertising': {
    system: 'MAP · Ad ops',
    queue: [
      { id: 'LD-2044', task: 'Score inbound lead' },
      { id: 'CMP-19', task: 'Launch email campaign' },
      { id: 'SEG-6', task: 'Refresh audience segment' },
    ],
  },
  'sales-crm': {
    system: 'CRM · CPQ',
    queue: [
      { id: 'LD-118', task: 'Qualify inbound lead' },
      { id: 'QTE-44', task: 'Generate quote' },
      { id: 'MTG-9', task: 'Book follow-up meeting' },
    ],
  },
  'supply-chain': {
    system: 'WMS · APS',
    queue: [
      { id: 'PO-7701', task: 'Issue purchase order' },
      { id: 'WH-22', task: 'Slot inbound inventory' },
      { id: 'DM-8', task: 'Update demand plan' },
    ],
  },
  aviation: {
    system: 'PSS · Ops',
    queue: [
      { id: 'PNR-4412', task: 'Complete passenger booking' },
      { id: 'CKI-90', task: 'Process check-in' },
      { id: 'CRW-6', task: 'Publish crew roster' },
    ],
  },
  'maritime-shipping': {
    system: 'TOS · Customs',
    queue: [
      { id: 'BL-2044', task: 'Issue bill of lading' },
      { id: 'CST-11', task: 'Prepare customs pack' },
      { id: 'VSL-3', task: 'Update vessel schedule' },
    ],
  },
  mining: {
    system: 'Fleet · HSE',
    queue: [
      { id: 'EQ-118', task: 'Log equipment service' },
      { id: 'SFT-7', task: 'File site safety check' },
      { id: 'INV-2', task: 'Reconcile parts inventory' },
    ],
  },
  'telecom-infrastructure': {
    system: 'NOC · NMS',
    queue: [
      { id: 'NOC-902', task: 'Correlate network alarm' },
      { id: 'ACT-14', task: 'Complete service activation' },
      { id: 'FLD-5', task: 'Dispatch field technician' },
    ],
  },
}

export const platformOrbitLabels = [
  'Healthcare',
  'Banking',
  'Insurance',
  'Retail',
  'Logistics',
  'Manufacturing',
]
