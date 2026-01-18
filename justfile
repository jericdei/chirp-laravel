php *COMMAND:
    docker compose exec php php artisan {{COMMAND}}
artisan *COMMAND:
    docker compose exec php php artisan {{COMMAND}}
composer *COMMAND:
    docker compose exec php composer {{COMMAND}}
bun *COMMAND:
    docker compose exec php bun {{COMMAND}}
dev:
    docker compose exec php bun dev
