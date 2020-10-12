angular.module('MainApp', [])

function mainController($scope, $http) {

    // Función para registrar a un mensaje
    $scope.registrarMensaje = function () {
        if ($scope.frmMensaje.$valid) {
            $http.post('/app/mensaje', $scope.newMensaje)
                .success(function (data) {
                    $scope.newMensaje = {}; //Limpiamos el formulario
                    $scope.msjExito = true;
                    $scope.msjError = false;
                    console.log('Mensaje enviado: ' + data);

                })
                .error(function (data) {
                    $scope.msjExito = false;
                    $scope.msjError = true;
                    console.log('Error: ' + data);
                });
        }
    };
}
