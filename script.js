const formatarMoeda = (valor) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);

    function calcularROI () {
        const investimentos = parseFloat(
            document.getElementById('investimento').value
        );
        const receita = parseFloat(
            document.getElementById('receita').value
        );

        if (isNaN) {
            alert('Preencha insvestimento e receita');
            return;
        }

        const roas = receita / investimento;

        const roi = ((receita - investimento) / investimento) * 100;

        const lucro = receita - investimento;

        let diagnostico, cor;

        if (roas >= 3) {
            diagnostico = '🚀 Campanha excelente — ROAS acima de 3x';
            cor = '#16a34a';
        } else if (roas >= 1) {
            diagnostico = '✅ Campanha positiva — mas há espaço para otimizar';
            cor = '#ca8a04';
        } else {
            diagnostico = '🔴 Prejuízo — revisar segmentação e criativos';
    cor = '#dc2626';
        }
        
        const resultDiv = document.getElementById('resultado');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
        <div class="diag" style="color:${cor}">${diagnostico}</div>
    <div class="metricas">
      <div class="metrica">
        <span class="m-label">ROAS</span>
        <span class="m-val">${roas.toFixed(2)}x</span>
      </div>
      <div class="metrica">
        <span class="m-label">ROI</span>
        <span class="m-val">${roi.toFixed(1)}%</span>
      </div>
      <div class="metrica">
        <span class="m-label">Lucro líquido</span>
        <span class="m-val">${formatarMoeda(lucro)}</span>
      </div>
    </div>
  `;
}
