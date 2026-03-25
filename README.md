# P2PLabs Landing Page

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create a local env file:

```bash
cp .env.example .env.local
```

3. Add your Web3Forms access key to `.env.local`:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

## Testing the contact form

1. Leave fields empty and submit to confirm validation errors appear.
2. Enter an invalid email to confirm email validation.
3. Submit a valid test message and confirm the loading state, success message, and form reset.
4. Check the destination inbox configured in Web3Forms for the delivered submission.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. In the Vercel project settings, add an environment variable named `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. Redeploy the project.
5. After deployment, submit the contact form on the live site to verify delivery.
