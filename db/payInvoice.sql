UPDATE invoice
SET paid = 'true'
WHERE invoice_id = $1