
/* @flow */

/* SCF JSON Object Definitions.
 * For more information, check confluence documentation:
 * https://www.asp.demica.com/confluence/display/SCF/JSON+Object+Definitions
 */

export type LoginType = "customer" | "supplier" | "buyer"

export type OAuthTokenCredentials = {
  username: string;
  corporateId?: string;
  password: string;
  persist: boolean;
};

export type Language = {
  name: string;
  code: string;
};

export type Address = {
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  addressLine4?: string;
  city?: string;
  county?: string;
  postCode?: string;
  countryCode: string;
};

export type Country = {
  code: string;
  name: string;
};

export type Existing_Bank_Account = {
  id: string;
  currency: string;
  bankName: string;
  accountNumber: string;
  approvalStatus: string;
  accountType: string;
  accountNumberType: string;
  funderId: string;
  clientName: string;
  sortCode?: string;
  routingNumber?: String;
  finalCode: String;
};

export type Currency = {
  code: string;
  name?: string;
};

export type Timezone = {
  zoneId: string;
  longName: string;
};


export type Page = {
  page: number;
  size: number;
  recordCount?: number;
  pageCount?: number;
  sorting?: Array<string>;
};

// NOTE: this is synonymous with the UserProfile JSON object described on the API wiki:
// https://www.asp.demica.com/confluence/display/SCF/JSON+Object+Definitions#JSONObjectDefinitions-UserProfile
export type UserRole = {
  id: string;
  code: string;
  name: string;
  selected?: boolean; // for UI
};

export type Region = {
  code: string;
  id: string;
  name: string;
//   featuresEnabled?: list;
  selected?: boolean; // for UI
};

export type Metadata = {
  pagination?: Page;
};

export type ServiceErrorSource = {
  pointer: string;
};

export type Error = {
  id?: string;
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: ServiceErrorSource;
}

export type DateRange = {
  from?: string;
  to?: string;
};

export type NumberRange = {
  from?: number;
  to?: number;
};

export type FundingRequestCreateRequest = {
  manifestIds?: string[];
  manifestIdsWithVsn: Object;
  futureFundingCap: Object;
  effectiveDate: string;
  preSelectedInvoiceId?: string;
  interestCapIds: string[];
  commissionCapIds: string[];
  interestCapAll: string;
  commissionCapAll: string;
  displayCap: boolean;
};

export type PaymentExtensionRequestCreateRequest = {
  manifestIds?: string[];
  manifestIdsWithVsn: Object;
  extendedDate: string;
  tenor: number;
  manifsetIdsWithAmount: Object;
};

export type FlexibleSettlementRequestCreateRequest = {
  manifestIds?: string[];
  manifestIdsWithVsn: Object;
  extendedDate: string;
  tenor: number;
  manifsetIdsWithAmount: Object;
};

export type PaginationParams = {
  page?: number;
  size?: number;
  sort?: string;
};

export type ResultContainer = {
  meta: Metadata;
  errors?: Array<Error>;
  data?: Array<any>|Object;
};

export type SimpleSupplierConfiguration = {
  supplierId?: string;
  code?: string;
  buyerId?: string;
  autoTrade?: boolean;
  autoTradeDaysAfterInvoiceDate?: number;
};

export type SimpleSupplierProgramme = {
  tradingPartyId: string;
  clientId: string;
  code: string;
  name: string;
  groupCode?: string;
  address: Address;
  buyerSupplierRef: string;
  activeForTrading: boolean;
  tradingLimit: number;
  tradingLimitCurrency: string;
  countryCode?: string; // flatten address.countryCode for use in tables
};

export type SupplierProgramme = {
  id: string;
  supplierId: string;
  buyerId: string;
  code: string;
  buyerSupplierRef: string;
  commitmentNumber: string;
  name: string;
  address: Address;
  phone?: string;
  fax?: string;
  tradingPartyEmail?:string;
  tradingLimit?: number;
  tradingLimitCurrency: string;
  activeForTrading: boolean;
  groupCode?: string;
  autoTradeDaysAfterInvoiceDate?: number; // integer
  documentCollection: boolean;
  autoTrade: boolean;
  rejectedInvoicesReOffered: boolean;
  clientRegionTimezone: Object;
  tradingLimitExpiry: string;
};

export type SupplierPortfolio = {
  portfolioId: string;
  supplierId: string;
  buyerId: string;
  currId: string;
  code: string;
  tradingLimit?: number;
  tradingLimitCurrency: string;
  discountMargin?: number;
  commissionMargin?: number;
  basisType: string; // one of BASIS_TYPE
  ineligibleAfterDaysRemaining: number; // integer
  commissionType?: string; // one of COMMISSION_TYPE
  unfundedCommission: boolean;
  minimumCommissionAmount?: number;
  minimumDiscountAmount?: number;
  maximumInvoiceTenor: number; // integer (API mis-spelling of "tenure")
  discountTaxRate?: number;
  commissionTaxRate?: number;
  compoundInterestEnabled: boolean;
};

export type NewTradingPartyProgramme = {
  id: string;
  supplierId: string;
  buyerId: string;
  code: string;
  buyerSupplierRef: string;
  name: string;
  address: Address;
  phone?: string;
  fax?: string;
  tradingPartyEmail?: string;
  tradingLimit?: number;
  tradingLimitCurrency: string;
  activeForTrading: boolean;
  groupCode?: string;
  autoTradeDaysAfterInvoiceDate?: number; // integer
  documentCollection: boolean;
  autoTrade: boolean;
  rejectedInvoicesReOffered: boolean;
  discountMargin?: number;
  commissionMargin?: number;
  basisType: string; // one of BASIS_TYPE
  ineligibleAfterDaysRemaining: number; // integer
  commissionType?: string; // one of COMMISSION_TYPE
  unfundedCommission: boolean;
  minimumCommissionAmount?: number;
  minimumDiscountAmount?: number;
  maximumInvoiceTenor: number; // integer (API mis-spelling of "tenure")
  discountTaxRate?: number;
  commissionTaxRate?: number;
  buyerSplitPercent: number;
  buyerCostPayment: string; // one of: BUYER_COST_PAYMENT_TYPES
  supplierSplitPercent: number;
  tradingLimitExpiry: string;
  compoundInterestEnabled: boolean;
  regionTimezone: Object;
};

// these will be used as i18n keys
export const COMMISSION_TYPES: Array<string> = [
  'TIME_WEIGHTED',
  'FLAT',
  'NONE'
];

// values as defined here:
// https://www.asp.demica.com/confluence/display/SCF/JSON+Object+Definitions
export const BASIS_TYPES: Array<string> = [
  'Act/365',
  'Act/360',
  'Act/Act'
];

export const BASIS_TYPE_ACT_360: string = 'Act/360';

export const CURRENCY_CUT_OFF_VALUE_DATES: Array<string> = [
  '+0',
  '+1',
  '+2',
  '+3',
  '+4',
  '+5',
  '+6',
  '+7',
  '+8',
  '+9',
  '+10'
];

export const BUYER_COST_PAYMENT_TYPES: Array<string> = [
  'UPFRONT',
  'AT_DUE_DATE'
];

export const TRANSACTION_TYPES: Array<string> = [
  'RF_TRANSACTION',
  'SCF_TRANSACTION'
];

export const FLEXIBLE_SETTLEMENT_TYPES: Array<string> = [
  'EARLY_SETTLEMENT', 'PAYMENT_EXTENSION'
  
];

export const MODES: Array<string> = [
  'FROM_SCRATCH',
  'FROM_EXISTING'
];

export const MINIMUM_AMOUNT_ALLOCATION_TYPES: Array<string> = [
  'BUYER',
  'SUPPLIER'
];

export const SETTLEMENT_TYPES: Array<string> = [
  'PAYMENT_EXTENSION_REQUEST',
  'EARLY_SETTLEMENT_REQUEST'
];

export const EFF_DATE_FORMAT: string = 'YYYY-MM-DD';

export const DATE_FORMAT: string = 'DD/MM/YYYY';

export type PublicUser = {
  code: string;
  name: string;
  roles: Array<string>;
  languageCode?: string;
  userSince?: string; // ISO8601
  informed?: boolean;
  lastPasswordChange?: string; // ISO8601
  firstTimeUse?: boolean;
  enabledFeatures: Array<string>;
  enabledFeaturesConfig: object;
};

export type UpdateUser = {
  languageCode?: string;
};

// ASP? REGION?
export const ORGANISATION_TYPES: Array<string> = [
  'BANK',
  'BUYER',
  'SUPPLIER'
];

export type Organisation = {
  id: string;
  code: string;
  name: string;
  type: string; // values as defined by ORGANISATION_TYPES
  selected?: boolean; // for UI
};

// Supplier Organisation has corresponding buyer mfsts
export type SupplierOrganisation = {
  id: string;
  code: string;
  name: string;
  type: string; // values as defined by ORGANISATION_TYPES
  buyer_mfsts?: Array<string>;
  selected?: boolean; // for UI
};

// Application User
export type ManagedUser = {
  id: string;
  code: string;
  initial?: string;
  forename: string;
  surname?: string;
  email?: string;
  employer?: string;
  language?: string;
  validity?: DateRange;
  expires?: string; // flatten validity.to for use in tables
  roles?: Array<string>;
  organisations?: Array<Organisation>;
  regions?: Array<Region>;
};

// For creation or update of a user
export type UserRequest = {
  id?: string;
  code: string;
  forename?: string;
  initial?: string;
  surname?: string;
  email?: string;
  employerId: string;
  organisationIds?: Array<string>;
  groups?: Array<string>; // list of roles
  // see https://www.asp.demica.com/confluence/display/SCF/JSON+Object+Definitions#JSONObjectDefinitions-UserRequest
  regionIds?: Array<string>;
  validity?: DateRange;
  language?: string; // TODO: find where this should be stored - not listed in the API docs for `UserRequest`
  // see link above
};

// Invoices are viewed as two types, depending on your role:
// - Receivable if you're a supplier/financier
// - Payable if you're a buyer
// A Buyer pays the invoice, a Financier receives the payment.
// The buyer doesn't know certain details, like the fee applied
// by the Financier to the Supplier.
// In practice, we can consider Payable as a subset of Receivable.

export type Payable = {
  id?: string;
  supplierName?: string;
  buyerName?: string;
  invoiceNumber?: string;
  payableNumber?: string;
  currency?: string;
  originalAmount?: number;
  certifiedAmount?: number;
  invoiceDate?: string; // ISO8601
  postingDate?: string; // ISO8601
  transferDate?: string; // ISO8601
  paymentDate?: string; // ISO8601
  // ENUM {
  //   INELIGIBILE,
  //   UNAPPROVED,
  //   APPROVED,
  //   TRANSFERRED
  // };
  approvalStatus?: string;
  approvalStatusDetail?: string;
  paymentStatus?: string;
};

export type PayableAnalysisCurrencySummary = {
  currency?: string;
  originalAmount?: number;
  certifiedAmount?: number;
};

export type PayableWithCurrencySummary = {
  invoices: Array<Payable>;
  currencySummary: Array<PayableAnalysisCurrencySummary>;
};

export type Receivable = {
  id?: string;
  supplierName?: string;
  buyerName?: string;
  invoiceNumber?: string;
  currency?: string;
  originalAmount?: number;
  certifiedAmount?: number;
  discountAmount?: number; // not in payables
  netAmount?: number; // not in payables
  invoiceDate?: string; // ISO8601
  paymentDate?: string; // ISO8601
  // ENUM {
  //   INELIGIBILE,
  //   UNAPPROVED,
  //   APPROVED,
  //   PENDING,
  //   FUNDED
  // };
  approvalStatus?: string;
  version?: number;
  paymentStatus?: string;
  partAcpt?: boolean;
  expectedPaymentDate?: string;
};

export type ReceivableDetailed = {
  id?: string;
  supplierName?: string;
  buyerName?: string;
  invoiceNumber?: string;
  payableNumber?: string;
  currency?: string;
  originalAmount?: number;
  certifiedAmount?: number;
  discountAmount?: number; // not in payables
  netAmount?: number; // not in payables
  invoiceDate?: string; // ISO8601
  postingDate?: string; // ISO8601
  transferDate?: string; // ISO8601
  paymentDate?: string; // ISO8601
  // ENUM {
  //   INELIGIBILE,
  //   UNAPPROVED,
  //   APPROVED,
  //   PENDING,
  //   FUNDED
  // };
  approvalStatus?: string;
  approvalStatusDetail?: string;
  version?: number;
  partAcpt?: boolean;
  expectedPaymentDate?: string;
};

export type ReceivableAnalysisCurrencySummary = {
  currency?: string;
  originalAmount?: number;
  certifiedAmount?: number;
  netAmount?: number;
};

export type ReceivableWithCurrencySummary = {
  invoices: Array<ReceivableDetailed>;
  currencySummary: Array<ReceivableAnalysisCurrencySummary>;
};

export type InvoiceFilter = {
  supplierId?: string;
  buyerId?: string;
  invoiceNumber?: string;
  originalAmountRange?: NumberRange;
  payableNumber?: string;
  currency?: string;
  status?: string; // maps to approvalStatus
  payment?: NumberRange;
  issueDateRange?: DateRange;
  postingDateRange?: DateRange;
  dueDateRange?: DateRange;
  discountAmountRange?: NumberRange;
  expectedPaymentDateRange?: DateRange;
  actualPaymentDateRange?: DateRange;
};

export type ProgrammeManagementFilter = {
  buyerName?: string;
  supplierName?: string;
};

export type ProgrammeManagementSuppFilter = {
  supplierName?: string;
};

//
// Funding Requests
//

export type FundingRequest = {
  id?: string;
  requestCode?: string;
  requestDate?: string; // ISO8601
  supplierCode?: string;
  supplierName?: string;
  currency?: string;
  fundingAmount?: number;
  discountAmount?: number;
  // ENUM {
  //   ACCEPTED,
  //   REJECTED,
  //   AWAITING_ACCEPTANCE
  //   AWAITING_VALIDATION
  // };
  approvalStatus?: string;
  approvalDate?: string; // ISO8601
  fundingDate?: string;
};

export type FundingRequestDetails = {
  invoices: Array<Receivable>;
  id?: string;
  requestCode?: string;
  requestDate?: string; // ISO8601
  supplierCode?: string;
  currency?: string;
  fundingAmount?: number;
  discountAmount?: number;
  // ENUM {
  //   ACCEPTED,
  //   REJECTED,
  //   AWAITING_VALIDATION
  // };
  approvalStatus?: string;
  approvalDate?: string; // ISO8601
};

export type FundingRequestFilter = {
  supplierId?: string;
  approvalStatus?: string;
  dateRange?: DateRange;
};

//
// Credit Notes
//

export type CreditNote = {
  id?: string;
  supplierName?: string;
  buyerName?: string;
  supplierCreditNoteNumber?: string;
  buyerCreditNoteNumber?: string;
  currency?: string;
  originalAmount?: number;
  allocatedAmount?: number;
  invoiceDate?: string; // ISO8601
  postingDate?: string; // ISO8601
  dueDate?: string; // ISO8601
  // ENUM {
  //   INELIGIBILE,
  //   UNAPPROVED,
  //   APPROVED,
  // };
  approvalStatus?: string;
};

export type DocumentHistoryEntry = {
  date?: string;
  // ENUM {INVOICE, CREDIT_NOTE}
  documentType?: string;
  amount?: number;
  certifiedAmount?: number;
  // Payables: ENUM {INELIGIBILE, UNAPPROVED, APPROVED, TRANSFERRED, SETTLED}
  // Receivables: ENUM {INELIGIBILE, UNAPPROVED, APPROVED, PENDING, FUNDED, SETTLED}
  approvalStatus?: string;
};

export type CreditNoteAllocation = {
  id?: string;
  invoiceId?: string;
  invoiceNumber?: string;
  payableNumber?: string;
  invoiceDate?: string;
  paymentDate?: string;
  allocationDate?: string;
  invoiceAmount?: number;
  allocatedAmount?: number;
  certifiedAmount?: number;
  currency?: string;
};

export type CreditNoteWithAllocationAndHistory = {
  id?: string;
  supplierName?: string;
  buyerName?: string;
  supplierCreditNoteNumber?: string;
  buyerCreditNoteNumber?: string;
  currency?: string;
  originalAmount?: number;
  allocatedAmount?: number;
  invoiceDate?: string; // ISO8601
  postingDate?: string; // ISO8601
  dueDate?: string; // ISO8601
  // ENUM { INELIGIBILE, UNAPPROVED, APPROVED };
  approvalStatus?: string;
  // ENUM { OUTSTANDING, DELINQUENT, DEFAULTED_OUTSTANDING, DEFAULTED_DELINQUENT,
  // MATURED_OUTSTANDING, MATURED_DELINQUENT, MATURED_DEFAULTED,
  // WRITTEN_OFF_OUTSTANDING, WRITTEN_OFF_DELINQUENT, WRITTEN_OFF_DEFAULTED };
  documentStatus?: string;
  history?: Array<DocumentHistoryEntry>;
  allocations?: Array<CreditNoteAllocation>;
};

export type CreditNoteFilter = {
  supplierId?: string;
  buyerId?: string;
  supplierCreditNoteNumber?: string;
  buyerCreditNoteNumber?: string;
  currency?: string;
  approvalStatus?: string;
  originalAmountRange?: NumberRange;
  issueDateRange?: DateRange;
  postingDateRange?: DateRange;
  dueDateRange?: DateRange;
};

//
// Reports
//

export type Report = {
  id?: string;
  name?: string;
  organisationName: string;
  filename?: string;
  reportDate?: string;
  available?: boolean;
};

export type ReportFilter = {
  reportType?: string;
  reportDateRange?: DateRange;
};

//
// Ledger Files
//

export type LedgerFileUploadItem = {
  id?: string;
  fileName: string;
  ledgerFileMsft: string;
  uploadDateTime: string;
  uploadedByName: string;
  uploadStatus?: string;
  approvalsNumber?: string;
  xmlReviewFileName?: string;
};

//
// Cashflow
//
export type CashflowForecastFilter = {
  currencyCode?: string;
  dateRange?: DateRange;
  buyerId?: string;
  supplierId?: string;
};

export type CashflowForecast = {
  weekNumber: number;
  currency: string;
  invoiceStatus: string;
  weekRange: DateRange;
  paymentAmount: number;
}

export type Cashflow = {
  id?: number;
  date: string;
  invoiceStatus: string;
  paymentStatus: string;
  currency: string;
  netAmount: number;
  discountAmount: number;
  fundingAmount: number;
  invoiceCount?: number;
  fundingRequestCount?: number;
  deferredAmount: number;
  buyerCost: number;
  paymentType: string; //maps to PaymentType
};

export const PaymentType = {
  ADVANCED_PAYMENT : "ADVANCED_PAYMENT",
  APPROVED_DUE_DATE_PAYMENT : "APPROVED_DUE_DATE_PAYMENT",
  FUNDED_DUE_DATE_PAYMENT : "FUNDED_DUE_DATE_PAYMENT",
  DEFERRED_PAYMENT : "DEFERRED_PAYMENT",
  BUYER_COST : "BUYER_COST",
  EARLY_PAYMENT : "EARLY_PAYMENT"
};

export type CashflowInvoice = {
  fundingRequestId?: string;
  invoice: Payable|Receivable;
};

export type TimelineFilter = {
  dateRange: DateRange;
  buyerId?: string;
  supplierId?: string;
  currencyCode?: string;
};

export type TimelineDetailFilter = {
  paymentDate?: string;
  currencyCode?: string;
  invoiceStatus?: string;
  paymentStatus?: string;
  buyerId?: string;
  supplierId?: string;
  deferredPaymentStatus?: string;
  buyerCostPaymentStatus?: string;
};

export type BuyerPaymentConfiguration = {
  unfundedPayments: boolean;
  futureDatedFunding: boolean;
  preAdviceDays: number;
  invoiceProcessingType: boolean;
};

export type ParentAffiliateStructure = {
  clientCode: string;
  clientId: string;
  clientName: string;
  type?: string;
  orgType?: string;
  parent?: string;
  affiliatesCount?: number;
  limitUsed?: number;
  limit?: number;
  limitExpiryDate?: string;
  limitDetails?: LimitUtilisation;
//   affiliates: list
};

export type LimitUtilisation = {
  id: string;
  organisationId: string;
  organisationCode: string;
  organisationName: string;
  organisationType: string;
  limitCurrency: string;
  limitAmount: number;
  utilisationAmount: number;
  description: string;
  percentageLimit: boolean;
  percentage: string;
  percentageUtilised: string;
  transactionType: string;
  fundingLimitExpiry: string;
};

export type EligibleParentsResponse = {
  meta: Object;
  data: Array<ParentAffiliateStructure>;
};

export type Affiliate = {
  code: string;
  id: string;
  name: string;
  type: String;
};

export const BUYER_TYPE: Array<string> = [
  'PARENT',
  'AFFILIATE',
  'STANDARDCLIENT'
];

export type InsuranceConfig = {
  policyNumber: string;
  insuranceCompany: string;
  insuranceLimit: string;
  policyExpiryDate : string;
  premiumDates: string;
  insuredType: string;
  numberOfDaysNotification1: number;
  numberOfDaysNotification2: number;
};

export type BuyerReportConfiguration = {
  creditNoteAllocationReport: boolean;
  buyerTransferNoticeReport: boolean;
};

export type BuyerLedgerFileConfiguration = {
  contentType: string; // one of: CONTENT_TYPES
  fileType: string; // one of: FILE_TYPES
  filePrefix: string;
  usePayableIdInUniqueRef: boolean;
  paymentRefProvided: boolean;
  adhocUploadEnabled: boolean;
  cutOffTime: string; // format: HH:MM:SS
  singleUserUpload: boolean;
  autoApprove: boolean;
  numberOfApproval: number;
  checkFileName: boolean;
};

export const CONTENT_TYPES: Array<string> = [
  'REAL_TIME',
  'NEW_ITEMS_ONLY'
];

export const APPROVAL_TYPES: Array<string> = [
  'AUTOMATIC_IMMEDIATELY',
  'AUTOMATIC_CUT_OFF_TIME',
  'MANUAL'
];

export const FILE_TYPES: Array<string> = [
  'CSV', 'XLS', 'XLSX', 'XML', 'TXT'
];

export const PAYMENT_REQUEST_PROCESSING_TYPES: Array<string> = [
  'BATCH_PAYMENTS',
  'SINGLE_INVOICE_PAYMENTS'
];

export const EARLY_SETTLEMENT_REDUCTION_TYPES: Array<string> = [
  'NOMINAL',
  'TIMEBOUND'
];

export type ClientProgramme = {
  id: string;
  code: string;
  name: string;
  groupCode?: string;
  address: Address;
  region?: string;
  phone?: string;
  fax?: string;
  clientEmail?:string;
  fundingLimitCurrency?: string;
  fundingLimit: number;
  buyerEntityCode: string;
  paymentConfiguration: BuyerPaymentConfiguration;
  reportConfiguration: BuyerReportConfiguration;
  ledgerFileConfiguration: BuyerLedgerFileConfiguration;
  buyerId?: string;
  insuranceConfig: InsuranceConfig;
  fundingLimitExpiry?: string;
  parentAffiliateStructure?: ParentAffiliateStructure;
  minTenor?: number;
};



export const INSURED_TYPES: Array<string> = [
  'CO_ASSURED',
  'LOSS_PAYEE'
];

export type SimpleBuyerProgramme = {
  id: string;
  code: string;
  name: string;
  groupCode?: string;
  address: Address;
  fundingLimitCurrency?: string;
  fundingLimit: number;
};

export type CurrencyCutOffProgramme = {
calShortName: string;
calMfst : string;
currMfst: string;
currShortName: string;
cutOffTime: string;
dateMod: number;
funderMfst: string;
userMod: string;
valueDate: string;
};

export type CurrencyCutOffCalendar = {
  longName: string;
  shortName: string;
  calendarID: string;
};

export type NonBusinessDay = {
  ruleId: string;
  regionName: string;
  date: string;
  basicIsoDate?: string;
};

export type PaymentCalendarEntry = {
  calendarId: string;
  calendarCode: string;
  buyerId: string;
  paymentDate: string;
  workday: boolean;
};

export type PaymentCalendar = {
  range: DateRange;
  payments: Array<PaymentCalendarEntry>;
};

export type Exhibit = {
  id: string;
  uploadDate: string;
  externalReference: string;
};

export type ExhibitSet = {
  exhibits?: Exhibit[];
  collectionComplete: boolean;
};

export type QrUrl = {
  qrUrl: string;
}

// Ref: https://www.asp.demica.com/confluence/display/SCF/JSON+Object+Definitions#JSONObjectDefinitions-CommunicationsPreference
export type CommunicationsPreference = {
  id: string;
  type: string; // The code identifying this settings entry (suitable for use as a localization key value)
  name?: string; // A human readable (English) description of the settings entry.
  enabled: boolean;
};

// Responses
export type GenericCollectionResponse = {
  meta: Object;
  data: Array<Object>;
};

export type GenericObjectResponse = {
  meta: Object;
  data: Object;
};

export type ClientServiceResponse = {
  meta: Metadata;
  data: ClientProgramme;
};

export type SimpleBuyerProgrammesResponse = {
  meta: Metadata;
  data: Array<SimpleBuyerProgramme>;
}

export type SuppliersServiceResponse = {
  meta: Metadata;
  data: SupplierProgramme;
}

export type SimpleTradingpartyResponse = {
  meta: Metadata;
  data: Array<SimpleSupplierProgramme>;
};

export type SupplierOrganisationResponse = {
  meta: Metadata;
  data: Array<SupplierOrganisation>;
};

export type SimpleSupplierConfigurationResponse = {
  meta: Metadata;
  data: Array<SimpleSupplierConfiguration>;
};

export type SupplierPortfoliosResponse = {
  meta: Metadata;
  data: Array<SupplierPortfolio>;
};

export type ManagedUserResponse = {
  meta: Metadata;
  data: ManagedUser;
};

export type ManagedUsersResponse = {
  meta: Metadata;
  data: Array<ManagedUser>;
};

export type TimelineResponse = {
  meta: Metadata;
  data: Array<Cashflow>;
};

export type TimelineInvoicesResponse = {
  meta: Metadata;
  data: Array<CashflowInvoice>;
};

export type TimelineRequestsResponse = {
  meta: Metadata;
  data: Array<FundingRequest>;
};

export type RegionsServiceResponse = {
  meta: Metadata;
  data: Array<Region>;
}

export type SiteKeyResponse = {
  meta: Metadata;
  data: string;
}

export type NonBusinessDaysResponse = {
  meta: Metadata;
  data: Array<NonBusinessDay>;
};

export type PaymentCalendarResponse = {
  meta: Metadata;
  data: PaymentCalendar;
};

export type LanguagesServiceResponse = {
  meta: Metadata;
  data: Array<Language>;
}

export type UserOrganisationResponse = {
  meta: Metadata;
  data: Array<Organisation>;
};

export type NewUsernameResponse = {
  meta: Metadata;
  data: string;
};

export type ValidReportTypesResponse = {
  meta: Metadata;
  data: Array<string>;
};

export type ExhibitResponse = {
  meta: Metadata;
  data: Exhibit;
};

export type ExhibitSetResponse = {
  meta: Metadata;
  data: ExhibitSet;
};

export type CommunicationsPreferenceResponse = {
  meta: Metadata;
  data: CommunicationsPreference[];
};

export type QrUrlResponse = {
  meta: Metadata;
  data: QrUrl;
};

export type OutstandingSummary = {
  currency: string;
  totalUnapproved: number;
  totalApproved: number;
  totalFundingPending: number;
  totalFunded: number;
  newFundingPending: number;
  newFundingPendingDisc: number;
  newFunded: number;
  newFundedDisc: number;
  totalOutstanding: number;
};

export type ConsolidatedSummary = {
  currency: string;
  status: string;
  amount: number;
}

export type SpendAnalysis = {
  inProgram: boolean;
  buyerId?: string;
  buyerName?: string;
  supplierId?: string;
  supplierName?: string;
  trustId?: string;
  trustName?: string;
  currency?: string;
  totalSpend?: number;
  averageDpo?: number;
  shareCreditNotes?: number;
  averageMatchTime?: number;
};

export type SpendAnalysisRequest = {
  dateRange?: DateRange;
  buyerId?: string;
  currency?: string;
};

export type ResetUsernameRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  username: string;
};

export type PaymentCalendarRequest = {
  dateRange: DateRange;
};

export type ChangePasswordRequest = {
  password: string;
};

export type Alert = {
  id: string;
  deadline: string; // ISO8601
  posted: string; // ISO8601
  action: string;
  objectName: string;
  comments?: string;
  type: string; // Action | Notification
  objectType: string;
  userCode?: string;
  priority: number;
};

export type OrganisationGroup = {
  id: string;
  code: string;
  groupType: string; // BUYER_GROUP, SUPPLIER_GROUP
};

export type NewOrganisationGroup = {
  groupCode: string;
};

export type BankDetails = {
  currency: string;
  bankName: string;
  bankCode: string;
  accountNumber: string;
  id?: string;
  code?: string;
  debtorId?: string;
  organisationId: string;
  approvalStatus?: string;
  updating?: boolean;
  deleting?: boolean;
  effectiveFrom?: string; // ISO8601
  effectiveTo?: string; // ISO8601
  direction: string;
  accountType: string;
  paymentMethod?: string;
  address?: Address;
  accountNumberType?: string;
  routingNumber?: string;
  createdBy?:string;
  createdOn?:string;
  existingBankAccount?:string;
};

export type CurrencyConfiguration = {
  currency: String;
  basisDays: String;
  discountMargin?: number;
  commissionMargin?: number;
  commissionType?: string;
  discountTaxRate?: number;
  commissionTaxRate?: number;
  minimumExtensionCharge: number;
};

export const ACCOUNT_TYPES: Array<string> = [
  'PAYMENT',
  'COLLECTION'
];

export const RF_SUPPLIER_ACCOUNT_TYPES: Array<string> = [
  'BENEFICIARY',
  'COLLECTION'
];

export const BANK_ACCOUNT_TYPES: Array<string> = [
  'SAVINGS',
  'CURRENTACCOUNT'
];

export const CLEARING_SYSTEM_INDENTIFICATION_TYPES: Array<string> = [
  'USABA',
  'AUBSB',
  'GBDSC'
];

export const LOCAL_INSTRUMENT_TYPES: Array<string> = [
  'CCD',
  'CTX',
  'RTP'
];

export const PAYMENT_METHODS: Array<string> = [
  'ACH',
  'EFT',
  'WIRE'
];

export const ACCOUNT_NUMBER_TYPES: Array<string> = [
  'IBAN',
  'BBAN'
];

export const BANK_TYPES: Array<string> = [
  'CorrespondentBank',
  'IntermediaryBank'
];
export type BankType = {
  type: string;
  bankName: string;
  bankCode: string;
  countryCode: string;
};

export type Bank = {
  setlMethId?: string;
  correspondentBank?: BankType;
  intermediaryBank?: BankType;

};


export type OutstandingRankedRequest = {
  entityType: string;
  rankCount?: number;
  currency?: string;
  supplierId?: string;
  buyerId?: string;
};

export type OutstandingRankedSummary = {
  rank: number;
  entityType: string;
  entityId: string;
  entityCode: string;
  entityName: string;
  itemCount: number;
  currency: string;
  outstandingAmount: number;
};

export type InvoiceStatusSummary = {
  invoiceStatus: string;
  currency: string;
  amount: number;
};

export type Funder = {
  id: string;
  code: string;
  name: string;
  isChild: boolean;
  address: Address;
  phone?: string;
  fax?: string;
  funderInterestType: string;
};

export const FUNDER_INTEREST_TYPES: Array<string> = ['SIMPLE_INTEREST', 'ANNUALISED_INTEREST'];

export type LimitExpiryNotificationDetail = {
  noOfDays: number;
  notificationTime:  string; // format: HH:MM:SS
}

export type FundersServiceResponse = {
  meta: Metadata;
  data: Funder;
};

export type SupplierOnboardingStatus = {
  buyerName: string;
  supplierName: string;
  supplierStatus: string;
  kycAnswered: number;
  kycTotal: number;
  termsAnswered: number;
  termsTotal: number;
  detailsAnswered: number;
  detailsTotal: number;
  consolidatedAnswered: number;
  consolidatedTotal: number;
};

export type SupplierOnboardingStatusResponse = {
  meta: Metadata;
  data: Array<SupplierOnboardingStatus>;
};

export type InterestRate = {
  id: number;
  curveId: number;
  dateTime: string;
  funderId: number;
  funderName: string;
  rateType: string;
  currency: string;
}

export type InterestRates = {
  interestRates : Array<InterestRate>;
}

export type DropdownOption = {
  id: number;
  name: string;
}

export type InterestRateType = {
  name: string;
}

export type TenorRate = {
  tenor: string;
  rate: number;
}

export type TradingCurrencies = {
  mfst: number;
  code: string;
  name: String;
}

export type PaymentExtensionRequest = {
  id?: string;
  requestCode?: string;
  requestDate?: string; // ISO8601
  supplierCode?: string;
  supplierName?: string;
  currency?: string;
  fundingAmount?: number;
  discountAmount?: number;
  ppaDays?: number;
  approvalStatus?: string;
  approvalDate?: string; // ISO8601
  fundingDate?: string;
  extendedPaymentDate?: string;
}

export type EarlySettlementRequest = {
  id?: string;
  requestCode?: string;
  requestDate?: string; // ISO8601
  buyerCode?: string;
  buyerName?: string;
  currency?: string;
  fundingAmount?: number;
  discountAmount?: number;
  ppaDays?: number;
  approvalStatus?: string;
  approvalDate?: string; // ISO8601
  fundingDate?: string;
  settledPaymentDate?: string;
}

export type InvoiceStatusRequest = {
  invoiceMfst: number;
  prtflioMfst: number;
  invoiceId: string;
}

export type ProgramStatus = {
  id: string;
  code: string;
  name: string;
  transactionType: string;
  groupCode?: string;
  address: Address;
  fundingLimitCurrency?: string;
  fundingLimit: number;
  programStatus: string;
};

