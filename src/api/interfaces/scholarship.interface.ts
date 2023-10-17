interface IScholarship {
    description: string,
    amount: number,
    educationLevel?: Array<string>,
    startDate: Date,
    endDate: Date,
    status: boolean
}

export default IScholarship;