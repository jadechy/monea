<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250701232809 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER ADD USR_GOOGLE_ID VARCHAR(255) DEFAULT NULL, DROP googleId
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_70AADA22D48A77F8 ON MON_USER (USR_GOOGLE_ID)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DROP INDEX UNIQ_70AADA22D48A77F8 ON MON_USER
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER ADD googleId VARCHAR(255) NOT NULL, DROP USR_GOOGLE_ID
        SQL);
    }
}
