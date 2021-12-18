const buttons = () => {
  return `
    <ul>
      <li>
        <button id="crew-tab">크루 관리</button>
      </li>
      <li>
        <button id="team-tab">팀 매칭 관리</button>
      </li>
    </ul>
  `;
};

const showHeader = () => {
  const $app = document.getElementById("app");

  $app.innerHTML = `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>${buttons()}</nav>
    </header>
    <main></main>
  `;
};

export { showHeader };