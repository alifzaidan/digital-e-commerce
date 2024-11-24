import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="w-full mt-20 flex justify-center">
            <SignUp />
        </div>
    );
}
