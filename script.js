"use strict";

// 서비스 소개용 예시입니다. 외부 API, 실시간 뉴스, 구독 서버를 사용하지 않습니다.
const briefs = {
  tech: {
    category: "BIG TECH",
    headline: "AI 투자 뉴스, 무엇을 봐야 할까요?",
    lines: [
      "기업의 AI 투자 계획은 관련 산업의 수요를 살펴볼 단서예요.",
      "발표한 투자 규모와 실제 집행 규모는 다를 수 있어요.",
      "수주가 매출과 이익으로 이어지는 속도도 확인해보세요."
    ],
    insight: "투자 발표만 보지 말고, 다음 실적에서 매출 전망과 수익성 변화를 함께 확인해보세요."
  },
  rates: {
    category: "ECONOMY & RATES",
    headline: "금리 인하, 주식에는 늘 좋은 소식일까요?",
    lines: [
      "금리가 낮아지면 기업의 자금 조달 부담이 줄어들 수 있어요.",
      "하지만 경기 둔화에 대응한 인하라면 기업 실적도 살펴야 해요.",
      "인하 여부만큼 이유와 앞으로의 금리 경로가 중요해요."
    ],
    insight: "금리 뉴스와 함께 고용·소비 흐름을 확인해보세요. 같은 금리 인하라도 시장이 받아들이는 맥락은 다를 수 있어요."
  },
  earnings: {
    category: "COMPANY EARNINGS",
    headline: "실적이 좋은데, 주가는 왜 내릴까요?",
    lines: [
      "주가는 실적의 절대 수준뿐 아니라 시장의 기대에도 반응해요.",
      "이번 분기 성적이 좋아도 다음 분기 전망이 약할 수 있어요.",
      "일회성 이익을 빼고도 사업이 성장했는지 확인해보세요."
    ],
    insight: "지난 분기 매출과 함께 회사가 제시한 향후 전망을 읽어보세요. 매출 성장률, 이익률, 현금흐름을 같이 보면 맥락이 더 또렷해져요."
  }
};

const topicButtons = document.querySelectorAll("[data-topic]");
const category = document.getElementById("brief-category");
const headline = document.getElementById("brief-headline");
const lines = document.getElementById("brief-lines");
const insight = document.getElementById("brief-insight");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const brief = briefs[button.dataset.topic];
    if (!brief) return;
    topicButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    category.textContent = brief.category;
    headline.textContent = brief.headline;
    lines.replaceChildren(...brief.lines.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    insight.textContent = brief.insight;
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
