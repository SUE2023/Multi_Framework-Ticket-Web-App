<?php
require_once __DIR__ . '/../vendor/autoload.php';

// Initialize Twig
$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . '/../templates');
$twig = new \Twig\Environment($loader, [
    'cache' => false, // change to '../cache' for production
]);

// Sample data to render
$data = [
    'title' => 'Ticket System',
    'heading' => 'Welcome to Ticket System',
    'paragraph' => 'Simplify your customer support with a fast, reliable ticket management system.'
];

echo $twig->render('home.twig', $data);
