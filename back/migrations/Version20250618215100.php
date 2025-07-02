<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250618215100 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs

        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER CHANGE USR_PICTURE USR_PICTURE VARCHAR(255) NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs

        $this->addSql(<<<'SQL'
            ALTER TABLE MON_USER CHANGE USR_PICTURE USR_PICTURE VARCHAR(255) DEFAULT NULL
        SQL);
    }
}
