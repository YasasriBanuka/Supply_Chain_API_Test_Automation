
// Registration form data for user
export const registrationData = {
    firstName: 'Banuka',
    lastName: 'Dias',
    email: 'banukadias5+yasa12@gmail.com',
    password: process.env.REGISTER_PASSWORD!,
    branchId: process.env.REGISTER_BRANCH_ID!
};

// super admin login data 
export const adminLoginData = {
    email: 'admin.primary@companydemo.com',
    password: process.env.REGISTER_ADMIN_PASSWORD!,
    branchId: process.env.REGISTER_BRANCH_ID!
}