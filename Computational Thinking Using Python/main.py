package ex2;

public class TesteVeiculo {
    public static void main(String[] args) {
        Veiculo v1 = new Veiculo();
        String[] veiculos = v1.modeloCarros();
        float[] vetorKm = v1.kmCarros(veiculos);
        float[] kmDistancia = v1.kmDistancia(vetorKm);
        float[] gastoTotal = v1.gastoTotal(kmDistancia);
        v1.relatorioFinal(veiculos, vetorKm,kmDistancia, gastoTotal);
    }
}
