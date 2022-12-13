export interface UserBiddingProps {
    companyDescription: {
        compamyName: string
        companyEvents: string
        productionTime: number
        warrantyObligations: number
        paymentTerms: string
        manufacturingCost: {
            start: number
            step: number
        }
    }
    isTimer: boolean
    position: number
};