// 연봉 데이터 (만원 단위)
const salaryPercentile = [
    { percentile: "상위 0.1%", salary: 98798, description: "토스뱅크 1000-8586-9366 감사합니다. 🏆💸 " },
{ percentile: "상위 0.2%", salary: 41668, description: "VIP 라운지에서 '요즘 힘드네'라고 말하는 중. 🍷" },
{ percentile: "상위 3%", salary: 32719, description: "회사에서 임원 대접 받기 시작, 하지만 스트레스도 3배. 💼" },
{ percentile: "상위 4%", salary: 28195, description: "주식 계좌에 3억 이상 있는데, 하루 변동폭이 월급 수준. 📊" },
{ percentile: "상위 5%", salary: 25269, description: "청약 넣을 때 '당첨되면 그냥 산다' 마인드. 🏗️" },
{ percentile: "상위 6%", salary: 23333, description: "압구정은 무리지만, 서초는 무리없을 것 같음. 🌆" },
{ percentile: "상위 7%", salary: 21820, description: "차는 국산 대형 세단, 하지만 수입차도 살 수 있음. 🚘" },
{ percentile: "상위 8%", salary: 20681, description: "부모님께 용돈 드릴 때 100만 원 단위로 생각함. 💵" },
{ percentile: "상위 9%", salary: 19802, description: "아이들 강남 학군? 보다는 조기유학 고민 📦" },
{ percentile: "상위 1.0%", salary: 19062, description: "편의점에서 1+1 행사 발견하면 살짝 재밌음. 🏷️" },
{ percentile: "상위2%", salary: 16532, description: "내가 사는 동네 부동산 가격은 뉴스에 자주 나옴. 🏠" },
{ percentile: "상위3%", salary: 13889, description: "심심하면 골프를 배워볼까 생각해봄. ⛳" },
{ percentile: "상위4%", salary: 12408, description: "샤넬정도는 고! 에르메스는 ㄷㄷ 👜" },
{ percentile: "상위5%", salary: 11407, description: "벤츠 사볼까? 🚗" },
{ percentile: "상위6%", salary: 10600, description: "애들 영어유치원 보낼까?" },
{ percentile: "상위7%", salary: 9960, description: "대기업 간부들끼리 와인 마시며 출퇴근 시간을 고민함. 🍷" },
{ percentile: "상위8%", salary: 9462, description: "한정판 여부가 중요함. ⌚" },
{ percentile: "상위9%", salary: 9035, description: "카드 한도 신경 안 씀. 💳" },
{ percentile: "상위10%", salary: 8659, description: "이제 돈이 아닌, 내 시간과 자유가 더 소중함. ⏳" },
{ percentile: "상위11%", salary: 8327, description: "강남 살지는 않지만, 그래도 '준강남'은 됨. 🏙️" },
{ percentile: "상위12%", salary: 8024, description: "해외여행은 가지만, 비즈니스 클래스는 고민함. ✈️" },
{ percentile: "상위13%", salary: 7742, description: "스타벅스 다니지만, 리필 안 되는 건 피함. ☕" },
{ percentile: "상위14%", salary: 7477, description: "결혼식 축의금 10만 원 내는 게 부담스럽진 않음. 💵" },
{ percentile: "상위15%", salary: 7227, description: "청약 가점이지만, '언제 당첨되나'가 고민임. 🏢" },
{ percentile: "상위16%", salary: 6995, description: "중고차 살 때도 연식보다는 브랜드 먼저 봄. 🚘" },
{ percentile: "상위17%", salary: 6773, description: "네이버 쇼핑보다 백화점 오프라인 쇼핑이 익숙함. 🛍️" },
{ percentile: "상위18%", salary: 6562, description: "이마트보단 코스트코, 가성비보단 브랜드! 🛒" },
{ percentile: "상위19%", salary: 6360, description: "여행은 무조건 자유여행, 패키지는 아직 고민 중. 🌏" },
{ percentile: "상위20%", salary: 6169, description: "연말정산 환급금이 아니라, 세금 더 낼 게 걱정임. 🧾" },
{ percentile: "상위21%", salary: 5998, description: "술은 싼 소주보다 프리미엄 막걸리가 좋음. 🍶" },
{ percentile: "상위22%", salary: 5840, description: "운동은 PT 등록하지만, 꾸준히 가는 건 또 다른 문제. 🏋️‍♂️" },
{ percentile: "상위23%", salary: 5684, description: "카드값 보고 한숨 쉬지만, 그래도 다음 달엔 또 긁음. 💳" },
{ percentile: "상위24%", salary: 5536, description: "편의점에서 삼각김밥보단 샐러드를 고르는 삶. 🥗" },
{ percentile: "상위25%", salary: 5392, description: "카페에서 메뉴판 가격 한 번 더 보고 시킴. ☕" },
{ percentile: "상위26%", salary: 5254, description: "호텔 조식 먹을 땐 최대한 늦게 가서 점심까지 해결. 🍽️" },
{ percentile: "상위27%", salary: 5121, description: "전세보단 월세, 그래도 지하철 1시간 이상 출퇴근은 힘듦. 🚉" },
{ percentile: "상위28%", salary: 4996, description: "명품 신발보단 뉴발란스 or 아디다스 삼선 슬리퍼. 👟" },
{ percentile: "상위29%", salary: 4875, description: "점심값 1만 원 넘으면 고민, 하지만 배달은 포기 못 함. 🍜" },
{ percentile: "상위30%", salary: 4766, description: "아이폰 사고 싶은데, 갤럭시 공시지원금이 너무 착함. 📱" },
{ percentile: "상위31%", salary: 4657, description: "넷플릭스는 친구랑 같이, 디즈니+는 고민 중. 📺" },
{ percentile: "상위32%", salary: 4550, description: "편의점 샌드위치도 비싸서 편의점 도시락으로 바꿈. 🍱" },
{ percentile: "상위33%", salary: 4448, description: "택시는 비싸니까, 카카오T 블루 대신 일반택시 호출. 🚖" },
{ percentile: "상위34%", salary: 4348, description: "에어팟 프로가 갖고 싶지만, QCY가 가성비 갑. 🎧" },
{ percentile: "상위35%", salary: 4251, description: "쿠팡 로켓와우 가입 고민 중, 월 4,990원이 부담됨. 📦" },
{ percentile: "상위36%", salary: 4165, description: "가스비 아끼려고 겨울에도 이불 속에서만 생활. ❄️" },
{ percentile: "상위37%", salary: 4076, description: "삼겹살은 1인분이 아니라, 무조건 '인분 나누기 2' 🥩" },
{ percentile: "상위38%", salary: 3992, description: "치킨 브랜드가 아니라, 치킨 할인 이벤트가 중요함. 🍗" },
{ percentile: "상위39%", salary: 3909, description: "외식보단 집밥, 간편식도 1+1 때만 구입. 🍛" },
{ percentile: "상위40%", salary: 3830, description: "데이터 무제한 요금제? Wi-Fi 없으면 그냥 참음. 📶" },
{ percentile: "상위41%", salary: 3751, description: "라면은 신라면, 컵라면은 오뚜기 세일할 때만. 🍜" },
{ percentile: "상위42%", salary: 3675, description: "라면은 신라면, 컵라면은 오뚜기 세일할 때만. 🍜" },
{ percentile: "상위43%", salary: 3608, description: "넷플릭스? 무료체험 돌려막기. 🎥" },
{ percentile: "상위44%", salary: 3546, description: "국밥 한 그릇으로 두 끼 해결 가능. 🍲" },
{ percentile: "상위45%", salary: 3479, description: "국밥 한 그릇으로 두 끼 해결 가능. 🍲" },
{ percentile: "상위46%", salary: 3413, description: "통신비 아끼려고 데이터 무제한 포기. 📶" },
{ percentile: "상위47%", salary: 3349, description: "통신비 아끼려고 데이터 무제한 포기. 📶" },
{ percentile: "상위48%", salary: 3285, description: "택시요금 100원 차이에도 어플 비교 중. 🚕" },
{ percentile: "상위49%", salary: 3225, description: "택시요금 100원 차이에도 어플 비교 중. 🚕" },
{ percentile: "상위50%", salary: 3165, description: "치킨 한 마리는 사치, 닭가슴살이 가성비 갑. 🍗" },
{ percentile: "하위51%", salary: 3105, description: "치킨 한 마리는 사치, 닭가슴살이 가성비 갑. 🍗" },
{ percentile: "하위52%", salary: 3045, description: "카페? 이디야 아니면 믹스커피지. ☕" },
{ percentile: "하위53%", salary: 2995, description: "카페? 이디야 아니면 믹스커피지. ☕" },
{ percentile: "하위54%", salary: 2942, description: "점심은 무조건 김밥천국 or 편의점 도시락. 🍱" },
{ percentile: "하위55%", salary: 2887, description: "점심은 무조건 김밥천국 or 편의점 도시락. 🍱" },
{ percentile: "하위56%", salary: 2834, description: "운동? 헬스장 비싸서 집에서 홈트 함. 🏋️‍♂️" },
{ percentile: "하위57%", salary: 2779, description: "운동? 헬스장 비싸서 집에서 홈트 함. 🏋️‍♂️" },
{ percentile: "하위58%", salary: 2728, description: "버스 환승 2번까지는 감수할 수 있음. 🚌" },
{ percentile: "하위59%", salary: 2676, description: "버스 환승 2번까지는 감수할 수 있음. 🚌" },
{ percentile: "하위60%", salary: 2628, description: "컵라면 큰 거 사느니 작은 거 두 개 사는 게 이득. 🍜" },
{ percentile: "하위61%", salary: 2578, description: "컵라면 큰 거 사느니 작은 거 두 개 사는 게 이득. 🍜" },
{ percentile: "하위62%", salary: 2530, description: "편의점 1+1 아니면 절대 안 삼. 🏷️" },
{ percentile: "하위63%", salary: 2487, description: "편의점 1+1 아니면 절대 안 삼. 🏷️" },
{ percentile: "하위64%", salary: 2438, description: "택시? 그냥 지하철+버스+도보 콤보로 해결. 🚶‍♂️" },
{ percentile: "하위65%", salary: 2402, description: "택시? 그냥 지하철+버스+도보 콤보로 해결. 🚶‍♂️" },
{ percentile: "하위66%", salary: 2376, description: "할인마트에서 유통기한 임박 제품 찾기 고수. 🛒" },
{ percentile: "하위67%", salary: 2330, description: "할인마트에서 유통기한 임박 제품 찾기 고수. 🛒" },
{ percentile: "하위68%", salary: 2300, description: "무료 나눔 & 줍줍이 쇼핑의 일부. 🎁" },
{ percentile: "하위69%", salary: 2271, description: "무료 나눔 & 줍줍이 쇼핑의 일부. 🎁" },
{ percentile: "하위70%", salary: 2210, description: "편의점? 이젠 시장 가야 함. 🏬" },
{ percentile: "하위71%", salary: 2149, description: "편의점? 이젠 시장 가야 함. 🏬" },
{ percentile: "하위72%", salary: 2078, description: "월세 살면서 가스비 아끼려고 이불 두 겹 씀. 🛏️" },
{ percentile: "하위73%", salary: 2006, description: "월세 살면서 가스비 아끼려고 이불 두 겹 씀. 🛏️" },
{ percentile: "하위74%", salary: 1930, description: "노트북? 중고 맥북 2015년형 아직 씀. 💻" },
{ percentile: "하위75%", salary: 1854, description: "노트북? 중고 맥북 2015년형 아직 씀. 💻" },
{ percentile: "하위76%", salary: 1785, description: "이제 외식은 꿈도 못 꾼다. 🍽️" },
{ percentile: "하위77%", salary: 1709, description: "데이터 무제한? Wi-Fi 없으면 그냥 포기. 📶" },
{ percentile: "하위78%", salary: 1629, description: "데이터 무제한? Wi-Fi 없으면 그냥 포기. 📶" },
{ percentile: "하위79%", salary: 1549, description: "이제 외식은 꿈도 못 꾼다. 🍽️" },
{ percentile: "하위80%", salary: 1470, description: "이제 외식은 꿈도 못 꾼다. 🍽️" },
{ percentile: "하위81%", salary: 1399, description: "겨울에도 전기장판 없이 버팀. 🥶" },
{ percentile: "하위82%", salary: 1315, description: "겨울에도 전기장판 없이 버팀. 🥶" },
{ percentile: "하위83%", salary: 1232, description: "겨울에도 전기장판 없이 버팀. 🥶" },
{ percentile: "하위84%", salary: 1175, description: "집밥 말고는 대안이 없다. 🍚" },
{ percentile: "하위85%", salary: 1095, description: "집밥 말고는 대안이 없다. 🍚" },
{ percentile: "하위86%", salary: 1011, description: "옷? 무조건 중고 or 기부받음. 👕" },
{ percentile: "하위87%", salary: 935, description: "배달음식? 그건 상위 20%의 삶이지. 🚴‍♂️" },
{ percentile: "하위88%", salary: 855, description: "배달음식? 그건 상위 20%의 삶이지. 🚴‍♂️" },
{ percentile: "하위89%", salary: 778, description: "이제 지하철 마저 사치로 느껴짐. 🏃" },
{ percentile: "하위90%", salary: 710, description: "이제 지하철 마저 사치로 느껴짐. 🏃" },
{ percentile: "하위91%", salary: 633, description: "빵이 한 끼 해결 가능. 🍞" },
{ percentile: "하위92%", salary: 569, description: "빵이 한 끼 해결 가능. 🍞" },
{ percentile: "하위93%", salary: 493, description: "컵라면도 특가 상품 아니면 고민함. 🍜" },
{ percentile: "하위94%", salary: 420, description: "컵라면도 특가 상품 아니면 고민함. 🍜" },
{ percentile: "하위95%", salary: 356, description: "컵라면도 특가 상품 아니면 고민함. 🍜" },
{ percentile: "하위96%", salary: 283, description: "이젠 경제 뉴스 볼 필요 없음. 어차피 내 이야기 아님. 📰" },
{ percentile: "하위97%", salary: 216, description: "이젠 경제 뉴스 볼 필요 없음. 어차피 내 이야기 아님. 📰" },
{ percentile: "하위98%", salary: 155, description: "전기세 아끼려고 카톡도 최소한으로 씀. 📵" },
{ percentile: "하위99%", salary: 87, description: "전기세 아끼려고 카톡도 최소한으로 씀. 📵" },
{ percentile: "하위100%", salary: 21, description: "돈이 아니라 체력이 전 재산. 🏃‍♂️" },
];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('salary-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const salary = Number(document.getElementById('salary').value);
        if (isNaN(salary) || salary <= 0) {
            document.getElementById('result').innerHTML = "<span style='color: red;'>올바른 연봉을 입력하세요.</span>";
            return;
        }

        // 🎵 소리 재생 (bad.wav)
        let audio = document.getElementById("soundEffect");
        if (audio) audio.play();

        // ✅ 상위 퍼센트 데이터 매칭 (데이터 검증 추가)
        let matchedData = salaryPercentile?.find(p => salary >= p.salary);
        let percentile = matchedData ? matchedData.percentile : "하위 100%";
        let description = matchedData ? matchedData.description : "이 구간의 평균적인 생활 수준 정보가 없습니다. 🤔";

        // ✅ 올바른 소득세 계산 (누진세율 반영)
        function calculateIncomeTax(annualSalary) {
            let tax = 0;
            
            if (annualSalary > 1000000000) { tax += (annualSalary - 1000000000) * 0.45; annualSalary = 1000000000; }
            if (annualSalary > 500000000) { tax += (annualSalary - 500000000) * 0.42; annualSalary = 500000000; }
            if (annualSalary > 300000000) { tax += (annualSalary - 300000000) * 0.40; annualSalary = 300000000; }
            if (annualSalary > 150000000) { tax += (annualSalary - 150000000) * 0.38; annualSalary = 150000000; }
            if (annualSalary > 88000000) { tax += (annualSalary - 88000000) * 0.35; annualSalary = 88000000; }
            if (annualSalary > 46000000) { tax += (annualSalary - 46000000) * 0.24; annualSalary = 46000000; }
            if (annualSalary > 12000000) { tax += (annualSalary - 12000000) * 0.06; }
            
            return Math.floor(tax); // 정수 반환
        }

        // ✅ 연봉에서 실수령액 계산
        function calculateNetSalary(annualSalary) {
            const monthlySalary = annualSalary / 12;
            const nationalPension = Math.min(monthlySalary * 0.045, 248850);
            const healthInsurance = Math.min(monthlySalary * 0.03545, 390340);
            const longTermCare = healthInsurance * 0.1281;
            const employmentInsurance = monthlySalary * 0.009;

            const totalInsurance = nationalPension + healthInsurance + longTermCare + employmentInsurance;
            const incomeTax = calculateIncomeTax(annualSalary);
            const localTax = Math.floor(incomeTax * 0.1); // 지방소득세 = 소득세의 10%

            const netSalary = annualSalary - (totalInsurance * 12 + incomeTax + localTax);
            return { 
                annual: netSalary.toFixed(0), 
                monthly: (netSalary / 12).toFixed(0), 
                deductions: {
                    nationalPension: (nationalPension * 12).toFixed(0),
                    healthInsurance: (healthInsurance * 12).toFixed(0),
                    longTermCare: (longTermCare * 12).toFixed(0),
                    employmentInsurance: (employmentInsurance * 12).toFixed(0),
                    incomeTax: incomeTax.toFixed(0),
                    localTax: localTax.toFixed(0)
                },
                monthlyDeductions: {
                    nationalPension: nationalPension.toFixed(0),
                    healthInsurance: healthInsurance.toFixed(0),
                    longTermCare: longTermCare.toFixed(0),
                    employmentInsurance: employmentInsurance.toFixed(0),
                    incomeTax: (incomeTax / 12).toFixed(0),
                    localTax: (localTax / 12).toFixed(0)
                }
            };
        }
        
        const netSalaryData = calculateNetSalary(salary);

        // ✅ 결과 출력 (정상적으로 출력되도록 예외 처리)
        document.getElementById('result').innerHTML = `
        <div style="padding: 5px; border: 2px solid #000; border-radius: 10px; background-color: #f9f9f9; text-align: center; width: 80%; margin: auto;">
            
            <div style="padding: 5px; border: 2px solid #007bff; border-radius: 10px; background-color: #eaf2ff; margin-bottom: 5px;">
                <h2 style="color: #007bff;">당신의 연봉 등급</h2>
                <p id="animatedText" style="font-size: 1.8em; font-weight: bold; color: #ff0000;">${percentile}</p>
                <hr style="border: 1px solid #007bff; width: 80%;">
                <p style="font-size: 1em; color: #333;">${description}</p>
            </div>

            <div style="padding: 5px; border: 2px solid #28a745; border-radius: 10px; background-color: #eaffea; margin-bottom: 5px;">
                <h3 style="color: #28a745;">📆 예상 월 실수령액</h3>
                <p style="font-size: 1.5em; font-weight: bold;">${netSalaryData.monthly} 만원</p>
            </div>

            <div style="padding: 5px; border: 2px solid #ff5733; border-radius: 10px; background-color: #ffe6e6; margin-bottom: 5px;">
                <h3 style="color: #ff5733;">📉 예상 연 실수령액</h3>
                <p style="font-size: 1.5em; font-weight: bold;">${netSalaryData.annual} 만원</p>
            </div>
        </div>
    `;
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('salary-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         const salary = Number(document.getElementById('salary').value);
//         if (isNaN(salary) || salary <= 0) {
//             document.getElementById('result').innerHTML = "<span style='color: red;'>올바른 연봉을 입력하세요.</span>";
//             return;
//         }
        
//         // 🎵 로컬 파일 소리 재생 (bad.wav)
//         let audio = document.getElementById("soundEffect");
//         audio.play();

//         // 상위 퍼센트 데이터 매칭
//         const matchedData = salaryPercentile.find(p => salary >= p.salary);
//         const percentile = matchedData?.percentile || "하위 100%";
//         const description = matchedData?.description || "이 구간의 평균적인 생활 수준 정보가 없습니다. 🤔";

//         function calculateNetSalary(annualSalary) {
//             const monthlySalary = annualSalary / 12; 
//             const nationalPension = Math.min(monthlySalary * 0.045, 248850);
//             const healthInsurance = Math.min(monthlySalary * 0.03545, 390340);
//             const longTermCare = healthInsurance * 0.1281;
//             const employmentInsurance = monthlySalary * 0.009;
            
//             const totalInsurance = nationalPension + healthInsurance + longTermCare + employmentInsurance;
            
//             let incomeTax = 0;
//             if (annualSalary <= 12000000) {
//                 incomeTax = 0; // 연봉 1200만원 이하 소득세 없음
//             } else if (annualSalary <= 14000000) {
//                 incomeTax = annualSalary * 0.06;
//             } else if (annualSalary <= 50000000) {
//                 incomeTax = annualSalary * 0.15 - 1080000;
//             } else if (annualSalary <= 88000000) {
//                 incomeTax = annualSalary * 0.24 - 5220000;
//             } else if (annualSalary <= 150000000) {
//                 incomeTax = annualSalary * 0.35 - 14900000;
//             } else if (annualSalary <= 300000000) {
//                 incomeTax = annualSalary * 0.38 - 19400000;
//             } else if (annualSalary <= 500000000) {
//                 incomeTax = annualSalary * 0.40 - 29400000;
//             } else if (annualSalary <= 1000000000) {
//                 incomeTax = annualSalary * 0.42 - 39400000;
//             } else {
//                 incomeTax = annualSalary * 0.45 - 69400000;
//             }
            
//             const localTax = incomeTax * 0.1;
//             const netSalary = annualSalary - (totalInsurance * 12 + incomeTax + localTax);
//             return { 
//                 annual: netSalary.toFixed(0), 
//                 monthly: (netSalary / 12).toFixed(0), 
//                 deductions: {
//                     nationalPension: (nationalPension * 12).toFixed(0),
//                     healthInsurance: (healthInsurance * 12).toFixed(0),
//                     longTermCare: (longTermCare * 12).toFixed(0),
//                     employmentInsurance: (employmentInsurance * 12).toFixed(0),
//                     incomeTax: incomeTax.toFixed(0),
//                     localTax: localTax.toFixed(0)
//                 },
//                 monthlyDeductions: {
//                     nationalPension: nationalPension.toFixed(0),
//                     healthInsurance: healthInsurance.toFixed(0),
//                     longTermCare: longTermCare.toFixed(0),
//                     employmentInsurance: employmentInsurance.toFixed(0),
//                     incomeTax: (incomeTax / 12).toFixed(0),
//                     localTax: (localTax / 12).toFixed(0)
//                 }
//             };
//         }
        
//         const netSalaryData = calculateNetSalary(salary);
        
//         document.getElementById('result').innerHTML = `
      
//         <div style="padding: 15px; border: 2px solid #000; border-radius: 10px; background-color: #f9f9f9; text-align: center; width: 80%; margin: auto;">
            
//             <!-- 연봉 등급 -->
//             <div style="padding: 15px; border: 2px solid #007bff; border-radius: 10px; background-color: #eaf2ff; margin-bottom: 15px;">
//                 <h2 style="color: #007bff;">당신의 연봉 등급</h2>
//                 <p id="animatedText" style="font-size: 1.8em; font-weight: bold; color: #ff0000;">${percentile}</p>
//                 <hr style="border: 1px solid #007bff; width: 80%;">
//                 <p style="font-size: 1em; color: #333;">${description}</p>
//             </div>
    
//             <!-- 월 실수령액 + 월간 공제 내역 (같은 색) -->
//             <div style="padding: 15px; border: 2px solid #28a745; border-radius: 10px; background-color: #eaffea; margin-bottom: 15px;">
//             <h3 style="color: #28a745;">📆 예상 월 실수령액</h3>
//             <p style="font-size: 1.5em; font-weight: bold;">${netSalaryData.monthly} 만원</p>

//             <hr style="border: 1px dashed #ccc; width: 80%;">

//             <h3 style="color: #28a745;">📌 월간 공제 내역</h3>
//             <p>국민연금: <strong>${netSalaryData.monthlyDeductions.nationalPension}</strong> 만원</p>
//             <p>건강보험: <strong>${netSalaryData.monthlyDeductions.healthInsurance}</strong> 만원</p>
//             <p>장기요양보험: <strong>${netSalaryData.monthlyDeductions.longTermCare}</strong> 만원</p>
//             <p>고용보험: <strong>${netSalaryData.monthlyDeductions.employmentInsurance}</strong> 만원</p>
//             <p>소득세: <strong>${netSalaryData.monthlyDeductions.incomeTax}</strong> 만원</p>
//             <p>지방소득세: <strong>${netSalaryData.monthlyDeductions.localTax}</strong> 만원</p>
//             </div>
    
//             <!-- 예상 연 실수령액 + 연간 공제 내역 (같은 박스) -->
//             <div style="padding: 15px; border: 2px solid #ff5733; border-radius: 10px; background-color: #ffe6e6; margin-bottom: 15px;">
//                 <h3 style="color: #ff5733;">📉 예상 연 실수령액</h3>
//                 <p style="font-size: 1.5em; font-weight: bold;">${netSalaryData.annual} 만원</p>

//                 <hr style="border: 1px dashed #ccc; width: 80%;">

//                 <h3 style="color: #6a0dad;">📌 연간 공제 내역</h3>
//                 <p>국민연금: <strong>${netSalaryData.deductions.nationalPension}</strong> 만원</p>
//                 <p>건강보험: <strong>${netSalaryData.deductions.healthInsurance}</strong> 만원</p>
//                 <p>장기요양보험: <strong>${netSalaryData.deductions.longTermCare}</strong> 만원</p>
//                 <p>고용보험: <strong>${netSalaryData.deductions.employmentInsurance}</strong> 만원</p>
//                 <p>소득세: <strong>${netSalaryData.deductions.incomeTax}</strong> 만원</p>
//                 <p>지방소득세: <strong>${netSalaryData.deductions.localTax}</strong> 만원</p>
//             </div>
//         </div>
//     `;
//     });
// });



// 🎵 로컬 파일 소리 추가 (HTML 문서에 `<audio>` 태그 추가)
document.body.insertAdjacentHTML("beforeend", `
    <audio id="soundEffect">
        <source src="bad.wav" type="audio/wav">
    </audio>
`);



