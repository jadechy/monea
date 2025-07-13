<?php

namespace App\Exception;

use Symfony\Component\Validator\ConstraintViolationListInterface;
use Throwable;

class RecurringExpenseValidationException extends \Exception
{
    private ConstraintViolationListInterface $errors;

    public function __construct(ConstraintViolationListInterface $errors, string $message = "Recurring expense validation failed", int $code = 0, ?Throwable $previous = null)
    {
        $this->errors = $errors;
        parent::__construct($message, $code, $previous);
    }

    public function getErrors(): ConstraintViolationListInterface
    {
        return $this->errors;
    }
}
