'use server'

import { clerkClient } from "@clerk/nextjs/server"
import { parseStringify } from "../utils"

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
    try {
        const client = await clerkClient()
        const { data } = await client.users.getUserList({
            emailAddress: userIds
        })
          
          if (!data || data.length === 0) {
            console.warn("No users found for the given IDs:", userIds);
            return [];
          }
          console.log("User IDs:", userIds);
console.log("Fetched Users Data:", data);

        const users = data.map((user) => ({
            id: user.id,
            name: `${user.firstName}`,
            email: user.primaryEmailAddress?.emailAddress,
            avatar: user.imageUrl
        }))
        console.log("users", users);

        const sortedUsers = userIds.map((email) => users.find((user) => user.email === email));
        return parseStringify(sortedUsers)
        
    } catch (err) {
        console.log('Error fetching users')
    }
}