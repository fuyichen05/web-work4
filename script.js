/* ==========================================================================
   fuyichen的前端网页作品集 — 交互脚本
   作品卡片整卡点击 → 在新标签页打开对应项目
   ========================================================================== */

(function () {
  "use strict";

  const mealsContainer = document.getElementById("meals");
  if (!mealsContainer) return;

  mealsContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".meal");
    if (!card) return;

    const url = card.getAttribute("data-url");
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });

  /* 键盘可访问：聚焦卡片后回车 / 空格同样打开 */
  mealsContainer.querySelectorAll(".meal").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
})();
