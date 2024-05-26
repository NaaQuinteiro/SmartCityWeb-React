import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import estilos from './CadastroSensores.module.css';

const TIPO_SENSOR_CHOICES = ['Temperatura', 'Contador', 'Luminosidade', 'Umidade'];
const UNIDADE_MEDIDA_CHOICES = ['°C', 'qtd', 'cd', '%'];

const schemaCadastroSensores = z.object({

    tipo: z.enum(TIPO_SENSOR_CHOICES, {
        required_error: 'Tipo é obrigatório',
    }),

    mac_address: z.string()
        .max(20, 'Mac Address deve ter no máximo 20 caracteres')
        .nullable()
        .optional(),

    latitude: z.string()
        .max(9, 'Latitude deve ter no máximo 9 caracteres')
        .min(1, 'Latitude deve ter no mínimo 1 caracter'),

    longitude: z.string()
        .max(11, 'Longitude deve ter no máximo 11 caracteres')
        .min(1, 'Longitude deve ter no mínimo 1 caracter'),

    localizacao: z.string()
        .max(100, 'Máximo de 100 caracteres')
        .min(3, 'Mínimo de 3 caracteres'),

    responsavel: z.string()
        .max(100, 'Máximo de 100 caracteres')
        .min(3, 'Mínimo de 3 caracteres'),

    unidade_medida: z.enum(UNIDADE_MEDIDA_CHOICES, {
        required_error: 'Unidade de Medida é obrigatória',
    }),

    status_operacional: z.boolean()
        .default(true),

    observacao: z.string()
        .optional(),
});

export function CadastroSensores() {
    const {
        register,
        handleSubmit,
        formState: { errors }, // por aqui acessamos as mensagens de erro geradas no Schema
    
    } = useForm({
        resolver: zodResolver(schemaCadastroSensores),
    });

    function obterDadosFormulario(data) {
        console.log(data);
    }

    return (
        <div className={estilos.container}>

            <p className={estilos.titulo}>Cadastro de Sensores</p>

            <form
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                
                {errors.tipo && (
                    <p className={estilos.messageErro}>{errors.tipo.message}</p>
                )}
                <label>Tipo</label>
                <select {...register('tipo')} className={estilos.campo}>
                    <option value="">Selecione...</option>
                    {TIPO_SENSOR_CHOICES.map((tipo, i) => (
                        <option key={i} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>
                

                {errors.mac_address && (
                    <p className={estilos.messageErro}>{errors.mac_address.message}</p>
                )}
                <label>Mac Address</label>
                <input
                    {...register('mac_address')}
                    className={estilos.campo}
                    placeholder="ex: 00:1B:44:11:3A:B7"
                />


                {errors.latitude && (
                    <p className={estilos.messageErro}>{errors.latitude.message}</p>
                )}  
                <label>Latitude</label>
                <input
                    {...register('latitude')}
                    className={estilos.campo}
                    placeholder="ex: 45.123456"
                />
                

                {errors.longitude && (
                    <p className={estilos.messageErro}>{errors.longitude.message}</p>
                )}
                <label>Longitude</label>
                <input
                    {...register('longitude')}
                    className={estilos.campo}
                    placeholder="ex: -123.456789"
                />


                {errors.localizacao && (
                    <p className={estilos.messageErro}>{errors.localizacao.message}</p>
                )}
                <label>Localização</label>
                <input
                    {...register('localizacao')}
                    className={estilos.campo}
                    placeholder="ex: Entrada Refeitório"
                />

                {errors.responsavel && (
                    <p className={estilos.messageErro}>{errors.responsavel.message}</p>
                )}
                <label>Responsável</label>
                <input
                    {...register('responsavel')}
                    className={estilos.campo}
                    placeholder="ex: Ayrton Senna"
                />


                {errors.unidade_medida && (
                    <p className={estilos.messageErro}>{errors.unidade_medida.message}</p>
                )}
                <label>Unidade de Medida</label>
                <select {...register('unidade_medida')} className={estilos.campo}>
                    <option value="">Selecione...</option>
                    {UNIDADE_MEDIDA_CHOICES.map((tipo, i) => (
                        <option key={i} value={tipo}>
                            {tipo}
                        </option>
                    ))}
                </select>


                {errors.status_operacional && (
                    <p className={estilos.messageErro}>{errors.status_operacional.message}</p>
                )}
                <label>Status Operacional</label>
                <input
                    type="checkbox"
                    {...register('status_operacional')}
                    className={estilos.checkbox}
                />

                {errors.observacao &&(
                    <p className={estilos.messageErro}>{errors.observacao.message}</p>
                )}
                <label>Observação</label>
                <textarea
                    {...register('observacao')}
                    className={estilos.campo}
                    placeholder="Insira sua observação..."
                />


                <button className={estilos.botao} type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
