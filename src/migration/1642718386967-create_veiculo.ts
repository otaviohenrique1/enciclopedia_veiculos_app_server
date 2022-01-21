import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createVeiculo1642718386967 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'veiculo',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'pais_origem',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'varchar'
        },
        {
          name: 'classificacao',
          type: 'varchar'
        },
        {
          name: 'tipo',
          type: 'varchar'
        },
        {
          name: 'fabricante',
          type: 'varchar'
        },
        {
          name: 'utilizadores',
          type: 'varchar'
        },
        {
          name: 'variantes',
          type: 'varchar'
        },
        {
          name: 'quantidade_produzida',
          type: 'varchar'
        },
        {
          name: 'quantidade_produzida_unidade',
          type: 'varchar'
        },
        {
          name: 'perido_servico',
          type: 'varchar'
        },
        {
          name: 'massa',
          type: 'varchar'
        },
        {
          name: 'massa_unidade',
          type: 'varchar'
        },
        {
          name: 'comprimento',
          type: 'varchar'
        },
        {
          name: 'comprimento_unidade',
          type: 'varchar'
        },
        {
          name: 'altura',
          type: 'varchar'
        },
        {
          name: 'altura_unidade',
          type: 'varchar'
        },
        {
          name: 'largura',
          type: 'varchar'
        },
        {
          name: 'largura_unidade',
          type: 'varchar'
        },
        {
          name: 'tripulacao',
          type: 'varchar'
        },
        {
          name: 'custo_unitario',
          type: 'varchar'
        },
        {
          name: 'custo_unitario_moeda',
          type: 'varchar'
        },
        {
          name: 'armamento',
          type: 'varchar'
        },
        {
          name: 'data_cadastro',
          type: 'datetime'
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('veiculos');
  }
}
