package ex2;

import java.util.Scanner;
public class Veiculo {
    public String[] modeloCarros() {
        Scanner input = new Scanner(System.in);
        String[] modelos = new String[5];

        for(int i=0; i< modelos.length; i++) {
            System.out.printf("Digite o modelo do %dº carro: ", i+1);
            modelos[i] = input.nextLine();
        }
        System.out.println();
        return modelos;
    }

    public float[] kmCarros(String[] modelos) {
        Scanner input = new Scanner(System.in);
        float[] kmPorLitro = new float[5];

        for(int i=0; i<modelos.length; i++) {
            System.out.printf("Veículo %d%n", i+1);
            System.out.printf("Marca: %s%nKm por litro: ", modelos[i]);
            kmPorLitro[i] = input.nextFloat();
            System.out.println();
        }
        return kmPorLitro;
    }

    public float[] kmDistancia(float[] kmPorLitro) {
        float[] kmDistancia = new float[5];

        for(int i=0; i<kmDistancia.length; i++) {
            kmDistancia[i] = 1000 / kmPorLitro[i];
        }
        return kmDistancia;
    }

    public float[] gastoTotal(float[] kmDistancia) {
        float[] gastoTotal = new float[5];

        for(int i=0; i<gastoTotal.length; i++) {
            gastoTotal[i] = (float) (kmDistancia[i] * 6.89);
        }
        return gastoTotal;
    }

    public void comparacaoMenor(String[] nome, float[] vetor) {
        float menor = 0;
        int index = 0;
        String nomeCarro = "";

        for(int i=0; i< vetor.length; i++) {
            if(i == 0) {
                menor = vetor[i];
            } else {
                if(vetor[i] < menor) {
                    menor = vetor[i];
                    index = i;
                }
            }
            nomeCarro = nome[index];
        }
        System.out.printf("O menor consumo é do %s.%n", nomeCarro);
    }

    public void relatorioFinal(String[] modelos, float[] km, float[] kmDistancia, float[] gastoTotal) {
        System.out.println("Relatório Final: ");
        for(int i=0; i<km.length; i++) {
            System.out.printf("%d - %s - %.1f - %.1f litros - R$%.2f%n", i+1, modelos[i], km[i], kmDistancia[i], gastoTotal[i]);
        }
        comparacaoMenor(modelos, gastoTotal);
    }
}
