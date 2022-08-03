import exampleJson from '../../assets/doc/page/Example_Spec.Example_Spec.json';
import { Feature } from '../../components/Feature/Feature';

export const ExampleOne = (): JSX.Element => {
	return (
		<>
			<h1>{exampleJson.title}</h1>
			<br />
			<h2>Class Name</h2>
			<pre>{exampleJson.className}</pre>
			<br />
			<h2>Description</h2>
			<pre>{exampleJson.narrative}</pre>
			<br />
			<h2>Statistics</h2>
			<table>
				<thead>
					<tr>
						<th>Runs</th>
						<th>successRate</th>
						<th>failures</th>
						<th>errors</th>
						<th>skipped</th>
						<th>duration</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{exampleJson.statistics.runs}</td>

						<td>{exampleJson.statistics.successRate}</td>

						<td>{exampleJson.statistics.failures}</td>

						<td>{exampleJson.statistics.errors}</td>

						<td>{exampleJson.statistics.skipped}</td>

						<td>{exampleJson.statistics.duration}</td>
					</tr>
				</tbody>
			</table>
			<br />
			<h2>Features</h2>
			{exampleJson.features.map((feature) => (
				<>
					<Feature
						blocks={feature.blocks}
						duration={feature.duration}
						id={feature.id}
						result={feature.result}
					/>
					<br />
					<br />
				</>
			))}
		</>
	);
};
