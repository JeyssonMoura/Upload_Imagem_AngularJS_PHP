var uploadArquivos = angular.module('MyUpload', []);

uploadArquivos.controller('UploadCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.EnviarArquivo = function () {
        let dados = new FormData();
        let meuArquivo = document.getElementById('arquivo').files[0];
        dados.append('arquivo', meuArquivo);
        $http({
            method: 'POST',
            url: './upload_angularjs.php',
            data: dados,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            $scope.minhaImagem = response.data;
        });
    }

}]);