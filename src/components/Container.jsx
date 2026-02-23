export const Container = ({ children }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 min-h-screen bg-white border-l border-r border-neutral-300">
            {children}
        </div>
    );
};
