import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createContacts1602961348775 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'contacts',
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
					name: 'orphanage_id',
					type: 'integer',
				},
				{
					name: 'whatsapp',
					type: 'string'
				},
				{
					name: 'facebook',
					type: 'string',
					isNullable: true
				},
				{
					name: 'website',
					type: 'string',
					isNullable: true
				}
			],
			foreignKeys: [
        {
          name: 'ContactOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('contacts')
	}

}
