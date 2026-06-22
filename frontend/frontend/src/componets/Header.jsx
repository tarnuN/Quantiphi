function Header() {
  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <header className="header">
      <div>
        <h1>📊 SubTrack Dashboard</h1>
      </div>

      <div className="date">
        {today}
      </div>
    </header>
  );
}

export default Header;