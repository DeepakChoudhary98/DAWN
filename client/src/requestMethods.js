import axios from 'axios'

const BASE_URL="http://localhost:5000/api/"

const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGVkMDMwMmFlYTJjYTEwZmNmMTA5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNjQ0MTI3NCwiZXhwIjoxNzE2NzAwNDc0fQ.VwZb5MTvhrKXGQuo0fu0SqyLDeqibnYJAMi3y-sPyCg"

export const publicRequest= axios.create({
    baseURL: BASE_URL
})

export const userRequest= axios.create({
    baseURL:BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})