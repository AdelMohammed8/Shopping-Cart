const FORMATTER_CURRENCY= new Intl.NumberFormat(undefined,{
    currency:"USD",style:"currency"
})

export function FormatCurrency(numbers:number){
    return FORMATTER_CURRENCY.format(numbers)
}