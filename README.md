# Trombin OClock test

Application de test (Express.js) affichant les promos et élèves de l'école X

## CDC

### Expression du besoin

Mail du client :

> Bonjour, nous sommes une école qu'elle est bien, et nous voulons un outil pour faciliter les contacts entre étudiants.
> Nous aimerions donc pouvoir lister les promotions ainsi que les étudiants qui les composent,
> mais aussi accèder aux détails d'un étudiant, photo de profil comprise.
> L'accès aux profils serait libre et gratuit.
> Dans un second temps l'outil pourrait servir à éditer les profils et promotions.
>
> En ésperant que vous pourrez répondre favorablement à notre demande,
> Cordialement
> Nicole.

### Use cases :

| #   | Je suis  | Je veux                                                   | Afin de                                         | Sprint |
| --- | -------- | --------------------------------------------------------- | ----------------------------------------------- | ------ |
| 1   | visiteur | accéder à la liste des promos                             | \*                                              | 1      |
| 2   | visiteur | accéder à une liste des étudiants qui composent une promo | \*                                              | 1      |
| 3   | visiteur | accéder aux détails d'un étudiant                         | \*                                              | 1      |
| 4   | visiteur | accéder à la page d'accueil                               | accéder aux promotions et aux utilisateurs      | 1      |
| 5   | visiteur | avoir les détails d'une promo                             | \*                                              | 1      |
| 6   | admin    | éditer les profils des utilisateurs                       | pouvoir voir sa photo de profil et informations | 2      |
| 7   | admin    | éditer les détails d'une promo                            | \*                                              | 2      |
