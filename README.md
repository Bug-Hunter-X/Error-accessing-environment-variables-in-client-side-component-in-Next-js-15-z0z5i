# Next.js 15 Environment Variable Error

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 client-side components.  The issue arises when trying to access an environment variable that isn't defined.

## Problem

Accessing undefined environment variables in client-side components throws an error. This is due to the way Next.js 15 handles environment variables during the build process.

## Solution

The solution involves ensuring that the environment variables are properly defined and accessed. You should check if the variable is defined before accessing it, or use a default value.  Using the `process.env` object directly in client components can lead to runtime issues.  It's recommended to use server-side functions, API routes, or pass these variables during the build process for client components.
