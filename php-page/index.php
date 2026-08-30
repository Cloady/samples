<?php
header("Content-Type: application/json");
echo json_encode([
  "app" => "php-page",
  "stack" => "php " . PHP_VERSION,
  "path" => $_SERVER["REQUEST_URI"] ?? "/",
  "greeting" => getenv("GREETING") ?: "no GREETING set",
], JSON_PRETTY_PRINT);
