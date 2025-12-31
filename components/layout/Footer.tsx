export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/20 py-8 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-4 h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
                {/* <p className="text-sm text-gray-500">
                    Built with Next.js & TypeScript
                </p> */}
                <p className="mt-2 text-xs text-gray-600">
                    © {new Date().getFullYear()} Deo Ajay J. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
