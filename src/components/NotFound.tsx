interface NotFoundProps {
  darkMode: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ darkMode }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page non trouvée</p>
      <a
        href="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
      >
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;
