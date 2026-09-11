import { industrySceneCopy } from './digitalEmployeeScenes'
import { platformLoop, type IndustryPack } from './digitalEmployees'

export interface IndustryPageCopy {
  overview: string
  detailed: string
  systems: string[]
  outcomes: string[]
  useCases: string[]
}

export const industryPageCopy: Record<string, IndustryPageCopy> = {
  healthcare: {
    overview:
      'AI Digital Employees take revenue cycle, access, and clinical operations work that currently sits with back-office teams: eligibility, prior auth, claims, coding, billing, and patient intake.',
    detailed:
      'The pack connects to EHR, payer portals, clearinghouses, and billing systems. Each employee reads the case, applies payer and facility policy, writes the result back, and attaches evidence. High-dollar denials and clinical exceptions go to a named human owner.',
    systems: ['EHR', 'Payer portals', 'Clearinghouse', 'Practice management', 'Pharmacy and lab systems'],
    outcomes: ['Fewer eligibility surprises at the point of care', 'Faster prior auth turnaround', 'Cleaner claims and fewer denials', 'Audit-ready posting and credentialing files'],
    useCases: ['Insurance verification before scheduling', 'Prior authorization packets', '837 claim assembly and status', 'Denial work queues', 'Patient registration and referral intake'],
  },
  'banking-financial-services': {
    overview:
      'AI Digital Employees run onboarding, credit, payments, and control work in core banking and KYC stacks, with a mandatory human path for high-risk cases.',
    detailed:
      'KYC, AML, onboarding, lending, monitoring, and reporting employees work from the same control loop. They match documents, score activity, assemble files, and post to core. Fraud, SAR, and credit exceptions escalate with the evidence pack attached.',
    systems: ['Core banking', 'KYC/AML platforms', 'Loan origination', 'Payment rails', 'Regulatory reporting'],
    outcomes: ['Shorter onboarding cycles', 'Consistent KYC evidence', 'Monitored payment exceptions', 'Ready regulatory extracts'],
    useCases: ['KYC document match', 'AML alert triage', 'Loan file assembly', 'Transaction monitoring queues', 'Account opening checklists'],
  },
  insurance: {
    overview:
      'AI Digital Employees cover policy, quote, claims, and correspondence across the policy lifecycle.',
    detailed:
      'FNOL, validation, underwriting support, renewals, and premium posting run as configured employees. They read policy and claim systems, apply guidelines, and keep correspondence on file. Fraud and complex liability stay with adjusters and underwriters.',
    systems: ['Policy admin', 'Claims', 'Rating engines', 'Document vaults', 'Customer portals'],
    outcomes: ['Faster FNOL to first decision', 'Cleaner renewal packets', 'Fewer leaked premium posts', 'Traceable correspondence'],
    useCases: ['First notice of loss intake', 'Claims validation', 'Quote and bind support', 'Renewal processing', 'Policy cancellation files'],
  },
  'accounting-finance': {
    overview:
      'AI Digital Employees handle record-to-report and procure-to-pay work: invoices, matching, close, payroll support, and cash.',
    detailed:
      'AP, AR, matching, reconciliation, and close employees sit on ERP and bank feeds. They match documents, post with evidence, and hold items that fail policy. Controllers keep approval on close and material journals.',
    systems: ['ERP', 'Bank feeds', 'AP/AR portals', 'Expense tools', 'Payroll'],
    outcomes: ['Higher three-way match rates', 'Shorter close checklists', 'Fewer unapplied cash items', 'Consistent audit packs'],
    useCases: ['Invoice capture and match', 'Bank reconciliation', 'Expense policy checks', 'Collections follow-up', 'Close task packs'],
  },
  retail: {
    overview:
      'AI Digital Employees run store, catalog, inventory, and customer operations that repeat every day.',
    detailed:
      'Orders, inventory, pricing, returns, and vendor employees connect POS, e-commerce, and warehouse systems. They allocate stock, push prices, and process returns with a record. Markdown and vendor disputes can require a buyer.',
    systems: ['POS', 'Inventory', 'E-commerce', 'Vendor portals', 'Loyalty'],
    outcomes: ['Fewer stockouts from missed allocations', 'Consistent markdown execution', 'Faster return-to-stock', 'Cleaner vendor POs'],
    useCases: ['Order allocation', 'Price file updates', 'Return and refund', 'Vendor PO chase', 'Store operations checklists'],
  },
  ecommerce: {
    overview:
      'AI Digital Employees manage marketplace, listing, fulfillment, and support work across channels.',
    detailed:
      'OMS, catalog, returns, and seller employees keep listings, orders, and tracking in sync. They route orders, update inventory, and handle refunds with channel rules. Chargebacks and policy exceptions go to operations.',
    systems: ['OMS', 'Marketplaces', 'WMS', 'Helpdesk', 'Pricing tools'],
    outcomes: ['Fewer oversells', 'Faster listing sync', 'Visible last-mile status', 'Consistent refund policy'],
    useCases: ['Order routing', 'Marketplace listing sync', 'Return merchandise authorization', 'Seller operations', 'Shipment tracking updates'],
  },
  manufacturing: {
    overview:
      'AI Digital Employees connect procurement, planning, quality, and plant reporting to ERP and MES.',
    detailed:
      'PO, supplier, production, QC, and maintenance employees move work between ERP, MES, and QMS. They release orders, log inspections, and file compliance evidence. Quality holds and safety events stay with plant owners.',
    systems: ['ERP', 'MES', 'QMS', 'CMMS', 'WMS'],
    outcomes: ['Cleaner PO and GRN cycles', 'Inspection records on time', 'Maintenance work logged', 'Production reports without spreadsheet chase'],
    useCases: ['Purchase order release', 'Work order scheduling', 'In-line QC capture', 'Supplier scorecards', 'Production reporting'],
  },
  'logistics-transportation': {
    overview:
      'AI Digital Employees book, dispatch, track, and invoice freight across modes.',
    detailed:
      'Booking, routing, POD, and carrier employees live in TMS and dispatch tools. They book loads, optimize routes, capture POD, and match freight invoices. Customs and claims exceptions escalate with documents attached.',
    systems: ['TMS', 'Dispatch', 'Carrier portals', 'Customs', 'Customer tracking'],
    outcomes: ['Fewer missed bookings', 'Tighter route plans', 'POD on file', 'Matched freight invoices'],
    useCases: ['LTL and FTL booking', 'Route planning', 'Proof of delivery', 'Freight invoice audit', 'Carrier onboarding files'],
  },
  automotive: {
    overview:
      'AI Digital Employees support dealer, warranty, service, and financing operations for OEM and retail networks.',
    detailed:
      'Warranty, service scheduling, parts, and financing employees connect DMS and OEM portals. They adjudicate claims against policy, book bays, and order parts. Customer goodwill and complex warranty stay with the dealer principal or OEM desk.',
    systems: ['DMS', 'OEM warranty', 'Parts catalogs', 'F&I', 'Service scheduling'],
    outcomes: ['Faster warranty decisions', 'Booked service capacity', 'Parts ordered against VIN', 'Complete F&I packets'],
    useCases: ['Warranty claim intake', 'Service appointments', 'Parts ordering', 'Recall campaigns', 'Dealer operations checklists'],
  },
  'real-estate': {
    overview:
      'AI Digital Employees run listing, lease, rent, and property operations for owners and managers.',
    detailed:
      'Listing, lease, rent, and maintenance employees work in PMS and listing networks. They publish units, assemble lease files, post rent, and open work orders. Credit and legal exceptions go to the property manager.',
    systems: ['PMS', 'Listing portals', 'Accounting', 'Maintenance', 'Mortgage coordination'],
    outcomes: ['Listings live on schedule', 'Lease files complete', 'Rent posted with evidence', 'Maintenance tickets routed'],
    useCases: ['Property listing publish', 'Tenant onboarding', 'Lease packet assembly', 'Rent collection', 'Work order dispatch'],
  },
  construction: {
    overview:
      'AI Digital Employees process bids, estimates, vendors, and site documentation on live projects.',
    detailed:
      'Bid, estimate, procurement, and safety employees sit on PM and estimating tools. They score bids, update quantities, chase vendors, and file safety records. Contractual risk stays with the project manager and QS.',
    systems: ['Estimating', 'Project controls', 'Procurement', 'Document control', 'HSE'],
    outcomes: ['Bid responses on time', 'Quantities tied to drawings', 'Vendor invoices matched', 'Safety docs on file'],
    useCases: ['Bid intake', 'Takeoff updates', 'Subcontractor POs', 'Progress reporting', 'Safety documentation'],
  },
  'human-resources': {
    overview:
      'AI Digital Employees cover hire-to-retire work: screening, scheduling, onboarding, payroll support, leave, and HR helpdesk.',
    detailed:
      'Recruitment, screening, onboarding, and HR operations employees connect ATS and HRIS. They screen, schedule, open records, and answer policy questions with citations. Offers, terminations, and sensitive cases stay with HR.',
    systems: ['ATS', 'HRIS', 'Payroll', 'Benefits', 'Learning'],
    outcomes: ['Faster screening slates', 'Onboarding checklists complete', 'Leave recorded correctly', 'HR tickets with policy evidence'],
    useCases: ['Resume screening', 'Interview scheduling', 'New hire setup', 'Leave and attendance', 'Employee documentation'],
  },
  legal: {
    overview:
      'AI Digital Employees support contracts, research, and legal operations. High-impact legal decisions stay with counsel.',
    detailed:
      'Review, classification, and matter employees organize clauses, dates, and files. They flag deviations and prepare packs. Advice, negotiation, and court strategy remain human. Review is mandatory for high-impact decisions.',
    systems: ['CLM', 'Matter management', 'DMS', 'Research tools', 'eDiscovery'],
    outcomes: ['Clause deviations visible', 'Matter files structured', 'Diligence classified', 'Counsel time spent on judgment'],
    useCases: ['Contract intake and flagging', 'Playbook comparison', 'Diligence classification', 'Matter timeline updates', 'Legal operations reporting'],
  },
  education: {
    overview:
      'AI Digital Employees run admissions, fees, exams, and student operations for schools and universities.',
    detailed:
      'Enrollment, applications, fees, and student support employees sit on SIS and admissions tools. They complete files, post payments, and route requests. Academic judgment and appeals stay with faculty and registrars.',
    systems: ['SIS', 'Admissions', 'Finance', 'LMS', 'Exam systems'],
    outcomes: ['Complete application files', 'Fees posted correctly', 'Exam admin packs ready', 'Student tickets tracked'],
    useCases: ['Application processing', 'Enrollment confirmation', 'Fee posting', 'Attendance capture', 'Scholarship files'],
  },
  'government-public-sector': {
    overview:
      'AI Digital Employees process citizen applications, benefits, permits, and records with an audit trail.',
    detailed:
      'Application, verification, case, and reporting employees work in case and permit systems. They check completeness, apply published rules, and stamp outcomes with evidence. Discretionary and statutory decisions stay with officers.',
    systems: ['Case management', 'Permit systems', 'Benefits', 'Records', 'Reporting'],
    outcomes: ['Complete citizen files', 'Permits issued with evidence', 'Benefits checked against rules', 'Public records retrievable'],
    useCases: ['Application intake', 'Document verification', 'Permit processing', 'Benefits eligibility', 'Statutory reporting'],
  },
  telecom: {
    overview:
      'AI Digital Employees handle activation, billing, complaints, and retention in BSS and OSS.',
    detailed:
      'Onboarding, SIM activation, billing, and complaint employees connect CRM, BSS, and OSS. They activate services, generate invoices, and triage incidents. Network change and credit write-off stay with operations and finance.',
    systems: ['CRM', 'BSS', 'OSS', 'Billing', 'Workforce'],
    outcomes: ['Faster activations', 'Cleaner bill cycles', 'Complaint SLAs visible', 'Retention offers logged'],
    useCases: ['Customer onboarding', 'SIM and service activation', 'Bill generation', 'Complaint resolution', 'Plan change requests'],
  },
  'travel-hospitality': {
    overview:
      'AI Digital Employees manage reservations, guest support, and revenue operations for travel and hotels.',
    detailed:
      'Reservation, booking, cancellation, and guest employees sit on PMS and GDS. They confirm stays, process changes, and route guest requests. Comping and overbooking policy stay with revenue and front office.',
    systems: ['PMS', 'GDS', 'CRS', 'Loyalty', 'Expense'],
    outcomes: ['Reservations confirmed', 'Cancellations posted to policy', 'Guest requests tracked', 'Loyalty updates applied'],
    useCases: ['Hotel reservation', 'Booking changes', 'Guest support tickets', 'Travel document checks', 'Revenue occupancy updates'],
  },
  'restaurants-food-services': {
    overview:
      'AI Digital Employees process orders, inventory, suppliers, and scheduling for restaurants and delivery.',
    detailed:
      'Order, kitchen, inventory, and delivery employees connect POS and kitchen display. They send tickets, reorder stock, and dispatch runs. Menu and labor policy stay with the operator.',
    systems: ['POS', 'KDS', 'Inventory', 'Delivery', 'Scheduling'],
    outcomes: ['Tickets in the kitchen on time', 'Low stock reordered', 'Delivery runs assigned', 'Invoices matched to suppliers'],
    useCases: ['Order processing', 'Kitchen expedite', 'Supplier invoices', 'Delivery dispatch', 'Workforce scheduling'],
  },
  pharmaceutical: {
    overview:
      'AI Digital Employees support safety, quality, and regulatory operations. Validation, approvals, and audit trails are required.',
    detailed:
      'Safety, regulatory, clinical ops, and quality employees assemble records in QMS and safety systems. They log events, compile packs, and hold batches that fail checks. Release and submission sign-off stay with qualified persons.',
    systems: ['QMS', 'Safety database', 'EDC', 'ERP', 'Document control'],
    outcomes: ['Adverse events logged', 'Submission packs assembled', 'Batch records complete', 'Deviations visible'],
    useCases: ['Drug safety case intake', 'Regulatory documentation', 'Clinical ops checklists', 'Quality batch review', 'Medical information responses'],
  },
  'life-sciences': {
    overview:
      'AI Digital Employees support research, lab, clinical data, and quality documentation for science operations.',
    detailed:
      'Lab, clinical data, and quality employees file documentation in LIMS and EDC. They clean datasets, flag deviations, and prepare reports. Scientific conclusions stay with investigators.',
    systems: ['LIMS', 'EDC', 'ELN', 'QMS', 'Reporting'],
    outcomes: ['Lab docs complete', 'Clinical data cleaned', 'Deviations flagged', 'Reports generated from source'],
    useCases: ['Laboratory documentation', 'Clinical data cleaning', 'Regulatory file prep', 'Quality events', 'Study reporting'],
  },
  'energy-utilities': {
    overview:
      'AI Digital Employees run customer, meter, outage, and field service work for utilities.',
    detailed:
      'Onboarding, billing, meter, and outage employees connect CIS and OMS. They ingest intervals, generate bills, and dispatch field work. Safety switching and load control stay with control rooms.',
    systems: ['CIS', 'MDM', 'OMS', 'Field service', 'Regulatory reporting'],
    outcomes: ['Meter data ingested', 'Bills generated from usage', 'Outage tickets dispatched', 'Service requests tracked'],
    useCases: ['Customer onboarding', 'Meter interval ingest', 'Outage management', 'Field job dispatch', 'Regulatory extracts'],
  },
  'oil-gas': {
    overview:
      'AI Digital Employees support procurement, maintenance, safety, and field operations documentation.',
    detailed:
      'Procurement, CMMS, and HSE employees assemble work packs and safety records. They schedule maintenance, file observations, and match invoices. Permit to work and isolation stay with the asset owner.',
    systems: ['ERP', 'CMMS', 'HSE', 'Document control', 'Logistics'],
    outcomes: ['Work orders scheduled', 'Safety observations on file', 'Procurement packs complete', 'Field reports captured'],
    useCases: ['Maintenance planning', 'Safety reporting', 'Procurement release', 'Invoice match', 'Field operations logs'],
  },
  agriculture: {
    overview:
      'AI Digital Employees run farm, inventory, quality, and logistics operations for agribusiness.',
    detailed:
      'Farm ops, inventory, and logistics employees connect farm ERP and TMS. They log field work, update inventory, and confirm buyer orders. Agronomy decisions stay with farm managers.',
    systems: ['Farm ERP', 'Inventory', 'TMS', 'Quality', 'Payments'],
    outcomes: ['Field operations logged', 'Inventory current', 'Orders confirmed', 'Quality lots recorded'],
    useCases: ['Farm activity capture', 'Grain inventory', 'Buyer orders', 'Quality sampling records', 'Logistics booking'],
  },
  'media-entertainment': {
    overview:
      'AI Digital Employees run content, rights, ads, and subscription operations.',
    detailed:
      'Content, rights, and ad ops employees classify assets, check license windows, and traffic ads. They work in MAM and rights systems. Editorial and deal terms stay with rights owners.',
    systems: ['MAM', 'Rights', 'Ad ops', 'Subscription billing', 'Support'],
    outcomes: ['Assets classified on ingest', 'License windows visible', 'Ads trafficked', 'Subscription events posted'],
    useCases: ['Content ingest', 'Rights checks', 'Ad operations', 'Subscription changes', 'Revenue reporting'],
  },
  'marketing-advertising': {
    overview:
      'AI Digital Employees run campaign, CRM, and analytics operations that keep demand generation moving.',
    detailed:
      'Lead, campaign, and analytics employees score inbound, launch journeys, and refresh segments. They work in MAP and ad ops. Creative and brand sign-off stay with marketing.',
    systems: ['MAP', 'CRM', 'Ad platforms', 'Analytics', 'CMS'],
    outcomes: ['Leads scored on intake', 'Campaigns launched from briefs', 'Segments refreshed', 'Reports from source data'],
    useCases: ['Lead management', 'Email campaigns', 'Audience segmentation', 'Ad operations', 'Marketing reporting'],
  },
  'sales-crm': {
    overview:
      'AI Digital Employees handle lead, quote, and follow-up work inside the CRM.',
    detailed:
      'Qualification, research, CRM update, and quote employees keep the pipeline current. They book meetings and draft quotes from price books. Discount and contract terms stay with sales leadership.',
    systems: ['CRM', 'CPQ', 'Calendar', 'Data providers', 'Proposal tools'],
    outcomes: ['Leads qualified with notes', 'CRM fields current', 'Meetings booked', 'Quotes generated from catalog'],
    useCases: ['Lead qualification', 'Lead research', 'Follow-up sequences', 'Meeting scheduling', 'Quote generation'],
  },
  'supply-chain': {
    overview:
      'AI Digital Employees procure, plan, warehouse, and invoice work across the network.',
    detailed:
      'Procurement, inventory, demand, and warehouse employees issue POs, slot stock, and update plans. They work in WMS and APS. Allocation during shortage stays with planners.',
    systems: ['ERP', 'WMS', 'APS', 'TMS', 'Supplier portals'],
    outcomes: ['POs issued on signal', 'Inbound slotted', 'Demand plan updated', 'Invoices matched'],
    useCases: ['Purchase orders', 'Supplier follow-up', 'Warehouse putaway', 'Demand planning updates', 'Shipment tracking'],
  },
  aviation: {
    overview:
      'AI Digital Employees support passenger, crew, maintenance, and revenue operations for airlines.',
    detailed:
      'Booking, check-in, baggage, and crew employees work in PSS and ops tools. They complete PNRs, process check-in, and publish rosters. Irregular operations and safety stay with ops control.',
    systems: ['PSS', 'DCS', 'Crew', 'MRO docs', 'Revenue'],
    outcomes: ['PNRs complete', 'Check-in processed', 'Baggage cases tracked', 'Crew rosters published'],
    useCases: ['Passenger booking', 'Check-in operations', 'Baggage support', 'Crew scheduling files', 'Maintenance documentation'],
  },
  'maritime-shipping': {
    overview:
      'AI Digital Employees handle shipment, port, customs, and vessel documentation.',
    detailed:
      'BL, customs, and port employees assemble documents in TOS and customs systems. They issue bills of lading, prepare filings, and update schedules. Stowage and safety stay with the vessel and terminal.',
    systems: ['TOS', 'Customs', 'Freight', 'Vessel ops', 'Invoicing'],
    outcomes: ['Bills of lading issued', 'Customs packs complete', 'Schedules updated', 'Freight invoices matched'],
    useCases: ['Shipment documentation', 'Port operations files', 'Customs filings', 'Vessel schedule updates', 'Freight invoicing'],
  },
  mining: {
    overview:
      'AI Digital Employees support equipment, safety, workforce, and site reporting operations.',
    detailed:
      'Maintenance, safety, and inventory employees log service, file checks, and reconcile parts. Production and isolation decisions stay with the site.',
    systems: ['Fleet', 'CMMS', 'HSE', 'Inventory', 'HR'],
    outcomes: ['Equipment service logged', 'Safety checks on file', 'Parts inventory reconciled', 'Site reports assembled'],
    useCases: ['Equipment maintenance logs', 'Safety inspections', 'Parts inventory', 'Workforce reporting', 'Compliance files'],
  },
  'telecom-infrastructure': {
    overview:
      'AI Digital Employees run network, activation, field service, and infrastructure monitoring.',
    detailed:
      'NOC, activation, and field employees correlate alarms, complete activations, and dispatch technicians. They work in NMS and workforce tools. Change on the live network stays with the NOC owner.',
    systems: ['NMS', 'NOC tools', 'OSS', 'Field workforce', 'Billing'],
    outcomes: ['Alarms correlated', 'Activations completed', 'Field jobs dispatched', 'Incidents with a trail'],
    useCases: ['Network alarm correlation', 'Service activation', 'Incident management', 'Field dispatch', 'Infrastructure monitoring'],
  },
}

export function describeEmployee(name: string, pack: IndustryPack) {
  const role = name.replace(/ Employee$/, '')
  const system = industrySceneCopy[pack.id]?.system ?? pack.title
  return `The ${role} AI Digital Employee reads the case in ${system}, applies ${pack.title.toLowerCase()} policy, writes the result to the system of record, verifies evidence, and escalates exceptions.`
}

export function getIndustryPage(pack: IndustryPack) {
  const copy = industryPageCopy[pack.id]
  return {
    pack,
    overview: copy?.overview ?? pack.summary,
    detailed: copy?.detailed ?? pack.summary,
    systems: copy?.systems ?? [],
    outcomes: copy?.outcomes ?? [],
    useCases: copy?.useCases ?? [],
    loop: platformLoop,
    employees: pack.employees.map((name) => ({
      name,
      work: describeEmployee(name, pack),
    })),
  }
}
