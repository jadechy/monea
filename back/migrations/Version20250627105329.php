<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250627105329 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_EXPENSE CHANGE EXP_TITLE EXP_TITLE VARCHAR(150) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_GROUPE CHANGE GRP_NAME GRP_NAME VARCHAR(100) NOT NULL, CHANGE GRP_TYPE GRP_TYPE VARCHAR(15) NOT NULL, CHANGE GRP_COLOR GRP_COLOR VARCHAR(15) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER CHANGE USR_EMAIL USR_EMAIL VARCHAR(180) NOT NULL, CHANGE USR_PASSWORD USR_PASSWORD VARCHAR(128) NOT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_EXPENSE CHANGE EXP_TITLE EXP_TITLE VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_GROUPE CHANGE GRP_NAME GRP_NAME VARCHAR(255) NOT NULL, CHANGE GRP_TYPE GRP_TYPE VARCHAR(255) NOT NULL, CHANGE GRP_COLOR GRP_COLOR VARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER CHANGE USR_EMAIL USR_EMAIL VARCHAR(255) NOT NULL, CHANGE USR_PASSWORD USR_PASSWORD VARCHAR(255) NOT NULL
        SQL);
    }
}
