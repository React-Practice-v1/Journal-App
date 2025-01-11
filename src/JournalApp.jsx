import AppRoute from "./router/AppRouter";
import AppTheme from "./theme/AppTheme";

function JournalApp() {
  return (
    <>
      <AppTheme>
        <AppRoute />
      </AppTheme>
    </>
  );
}

export default JournalApp;
